const db = new PouchDB('flags');
const counterEl = document.getElementById('counter');
const O = JSON.parse(document.getElementById('__DATA__').textContent);
const part1 = atob(decodeURIComponent(O['f']));
const part2 = atob(decodeURIComponent(O['g']));

void (async () => {
	try {
		const counterDoc = await db.get('counter');
		const value = counterDoc.counter + 2;
		await db.put({
			...counterDoc,
			counter: value,
		});
		counterEl.innerText = value.toString();
	} catch (e) {
		await db.bulkDocs([
			{
				flag_part1: part1,
				_id: `_local/flag_part_1`,
			},
			{
				flag_part2: part2,
				_id: `flag_part_2`,
			},
			{
				counter: 0,
				_id: 'counter',
			},
		]);
		counterEl.innerText = '0';
	} finally {
		counterEl.classList.add('floatIn');
	}
})();
