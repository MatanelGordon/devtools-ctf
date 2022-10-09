import * as fs from 'fs/promises';
import handlebars from 'handlebars';
import * as path from 'path';
import { OneOrMany, resolveOneOrMany } from '~/utils/oneOrMany';

export interface HandlebarsInstanceConfig {
	partialsDir: OneOrMany<string>;
	rootDir?: string;
}

export const createHandlebarsInstance = async (
	config: HandlebarsInstanceConfig
) => {
	const hbsInstance = handlebars.create();
	const rootDir = config.rootDir ?? '';

	const partialDirs = resolveOneOrMany(config.partialsDir).map(dir =>
		path.join(rootDir, dir)
	);

	const partialDirsStats = await Promise.all(
		partialDirs.map(dir => fs.lstat(dir))
	);

	const isAllDirectories = partialDirsStats.every(stat => stat.isDirectory());
	if (!isAllDirectories) {
		const badDir = partialDirs.find(
			(_, index) => !partialDirsStats[index].isDirectory()
		);
		throw new Error(`Error in partialsDir: "${badDir}" is not a directory`);
	}

	const partialsFiles = await Promise.all(
		partialDirs.map(async dir => {
			const files = await fs.readdir(dir);
			return files.map(file => path.join(dir, file));
		})
	);

	for (const partialPath of partialsFiles.flat()) {
		if (path.extname(partialPath) !== '.hbs')
			throw new Error(
				`Error in partialsDir: "${partialPath}" is not a handlebars file`
			);
		const fileWithExt = path.basename(partialPath);
		const partialName = fileWithExt.slice(0, fileWithExt.indexOf('.'));
		const partialContent = await fs.readFile(partialPath);

		hbsInstance.registerPartial(
			partialName,
			partialContent.toLocaleString()
		);

		console.log('registering', `"${fileWithExt}"`, 'as', partialName);
	}

	return hbsInstance;
};
