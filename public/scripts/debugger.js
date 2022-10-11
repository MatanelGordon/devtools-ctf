async function debugProgram() {
	const JSON_DATA = JSON.parse(
		document.getElementById('__DATA__').textContent
	);
	debugger;
	const flag = await getFlag(JSON_DATA);
	console.log('the flag is', flag);
}

function getURL(json) {
	try {
		const { a, b, c } = json;
		const fromBase64 = atob(a + b + c);
		return decodeURIComponent(fromBase64);
	} catch (e) {
		console.error(
			'error with constructing the url. This is unexpected, please contact the creator'
		);
		return undefined;
	}
}

async function getFlag(json) {
	const url = getURL(json);

	if(!url){
		throw new Error('URL error');
	}

	try {
		const fetched = await fetch(url, { method: 'GET' });
		const response = await fetched.json();
		const { flag } = response;
		return 'flag{********}';
	} catch (e) {
		console.error('error in getFlag()');
		console.error(e);
	}
}
