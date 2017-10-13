/*const arr = [];  
arr.push(1);  
arr = [1,2,3,4]; // 报错  
*/

const obj = {};  
obj.name = "Alice";  
console.log(obj);
/*obj = {};*/ // 报错 

//const arr = [];  
// 报错，[1,2,3]与[]不是同一个地址  
//arr = [1,2,3];  
const arr = [];  
// 不报错，变量名arr指向的地址不变，只是数据改变  
arr[0] = 1;  
arr[1] = 2;  
arr[2] = 3;  
console.log(arr.length); // 输出：3 