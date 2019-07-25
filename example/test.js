function test(param) {
    console.log(param);
}
test('a');
function f(_a) {
    var _b = _a === void 0 ? { a: '' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log('success');
}
f();
