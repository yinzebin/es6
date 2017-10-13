let arrayLike = {  
'0': 'a',  
'1': 'b',  
'2': 'c',  
length: 3  
};  
// ES5 的写法  
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']  
console.log(arr1);
// ES6 的写法  
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);  
// NodeList 对象  
/*let ps = document.querySelectorAll('p');  
Array.from(ps).forEach(function (p) {  
console.log(p);  
});  */
// arguments 对象  
function foo() {  
var args = Array.from(arguments);  
// ...  
}  
Array.from('hello')  
// ['h', 'e', 'l', 'l', 'o'] 
Array.from({ length: 3 });  

Array.from(arrayLike, x => x * x);  
//  等同于  
Array.from(arrayLike).map(x => x * x);  
Array.from([1, 2, 3], (x) => x * x)  
// [1, 4, 9]  