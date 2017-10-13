/*var {bar,foo} = {foo:"aaa",bar:"bbb"};
console.log(foo);*/
/*var {baz} = {foo:"aaa",bar:"bbb"};*/
/*console.log(bar); */// undefined
var {foo:baz} = {foo:"aaa",bar:"bbb"};
console.log(baz); // "aaa"
