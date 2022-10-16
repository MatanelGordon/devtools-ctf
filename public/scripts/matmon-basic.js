function _0x34da(_0x3e62c3, _0x678492) {
	const _0x12826f = _0x1282();
	return (
		(_0x34da = function (_0x34da03, _0x5c7ecb) {
			_0x34da03 = _0x34da03 - 0x103;
			let _0x18f5ce = _0x12826f[_0x34da03];
			return _0x18f5ce;
		}),
		_0x34da(_0x3e62c3, _0x678492)
	);
}

const _0x57927a = _0x34da;
(function (_0x10bcdd, _0x13ceaa) {
	const _0x453327 = _0x34da,
		_0x5edba3 = _0x10bcdd();
	while (!![]) {
		try {
			const _0x3d3320 =
				(-parseInt(_0x453327(0x104)) / 0x1) *
					(parseInt(_0x453327(0x118)) / 0x2) +
				(parseInt(_0x453327(0x103)) / 0x3) *
					(-parseInt(_0x453327(0x10b)) / 0x4) +
				-parseInt(_0x453327(0x10a)) / 0x5 +
				(-parseInt(_0x453327(0x10f)) / 0x6) *
					(-parseInt(_0x453327(0x108)) / 0x7) +
				(-parseInt(_0x453327(0x109)) / 0x8) *
					(parseInt(_0x453327(0x107)) / 0x9) +
				(-parseInt(_0x453327(0x111)) / 0xa) *
					(-parseInt(_0x453327(0x119)) / 0xb) +
				parseInt(_0x453327(0x10e)) / 0xc;
			if (_0x3d3320 === _0x13ceaa) break;
			else _0x5edba3['push'](_0x5edba3['shift']());
		} catch (_0x65209a) {
			_0x5edba3['push'](_0x5edba3['shift']());
		}
	}
})(_0x1282, 0x88f0a);
const db = new PouchDB(_0x57927a(0x115)),
	counterEl = document[_0x57927a(0x116)](_0x57927a(0x117)),
	O = JSON[_0x57927a(0x106)](
		document['getElementById'](_0x57927a(0x113))[_0x57927a(0x114)]
	),
	part1 = atob(decodeURIComponent(O['f'])),
	part2 = atob(decodeURIComponent(O['g']));
void (async () => {
	const _0x2dd918 = _0x57927a;
	try {
		const _0x3846e5 = await db[_0x2dd918(0x11b)]('counter'),
			_0x5c3041 = _0x3846e5['counter'] + 0x2;
		await db[_0x2dd918(0x11a)]({ ..._0x3846e5, counter: _0x5c3041 }),
			(counterEl['innerText'] = _0x5c3041[_0x2dd918(0x112)]());
	} catch (_0x4238a5) {
		await db[_0x2dd918(0x105)]([
			{ flag_part1: part1, _id: _0x2dd918(0x10d) },
			{ flag_part2: part2, _id: _0x2dd918(0x110) },
			{ counter: 0x0, _id: _0x2dd918(0x117) },
		]),
			(counterEl['innerText'] = '0');
	} finally {
		counterEl[_0x2dd918(0x10c)]['add']('floatIn');
	}
})();

function _0x1282() {
	const _0x4ea14a = [
		'put',
		'get',
		'687GFclCk',
		'2EaJsMT',
		'bulkDocs',
		'parse',
		'21555mAZHJs',
		'539YtPzum',
		'2760bIQEvY',
		'5242650OMPfRG',
		'12868NeNmaL',
		'classList',
		'_local/flag_part_1',
		'30396132lqsOSy',
		'79854QRjaWG',
		'flag_part_2',
		'2265150hwvFlc',
		'toString',
		'__DATA__',
		'textContent',
		'flags',
		'getElementById',
		'counter',
		'838430lolKYP',
		'22IFqdje',
	];
	_0x1282 = function () {
		return _0x4ea14a;
	};
	return _0x1282();
}
