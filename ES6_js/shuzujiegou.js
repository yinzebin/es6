//var [a,b,c] = [1,2,3];
//console.log(a);
//
//
//let [foo,[[bar],baz]] = [1,[[2],3]];
//console.log(foo); // 1
//bar // 2
//baz // 3
//
//let [,,third] = ["foo","bar","baz"];
//console.log(third); // "baz"
//
//let [head,...tail] = [1,2,4];
//head // 1
//console.log(tail); // [2,3,4]
//
//let [x,y,...z] = ['a'];
/*x // "a"
y // undefined
z // []*/


var [foo = true] = [];
foo // true

// x='a', y='b'
let [x=1,y=x] = [];
// x=1; y=1

function f(){
  console.log('aaa');
}

let [p=f()] = [];
console.log(p);