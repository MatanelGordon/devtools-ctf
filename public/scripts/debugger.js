async function debugProgram() {
	const JSON_DATA = JSON.parse(
		document.getElementById('__DATA__').textContent
	);
	const url = getURL(JSON_DATA);
	const flag = await getFlag(JSON_DATA, url);
	console.log('the flag is', flag);
}

function getURL(json) {
	try {
		const rawUrl = ['a', 'h', 'c', 'k', 'e']
			.sort()
			.map(key => json[key])
			.join('');
		return atob(decodeURIComponent(rawUrl));
	} catch (e) {
		console.error(e);
		throw new Error(
			'error with constructing the url. This is unexpected, please contact the creator'
		);
	}
}

async function getFlag(json, url) {
	if (!url) {
		throw new Error('URL error');
	}

	try {
		let sum = '';
		let count = 0;
		while (true) {
			const fetched = await fetch(`/${url}/${count}`, { method: 'GET' });
			const { flag, inc } = await fetched.json();

			if (inc === 0) break;

			sum += flag;
			count += inc;
		}
		const flag = atob(sum);
		return 'flag{********}';
	} catch (e) {
		console.error('error in getFlag()');
		console.error(e);
	}
}
