function func() {  
  var  n = 1;  
  if (true) {  
    var  n = 10;  
  }  
  console.log(n); // 1  
}  
func();




/*1*/
var a = [];  
for (let i = 0; i < 10; i++) {  
    a[i] = function() {  
        console.log(i);  
    }  
}  
a[5](); // 5  


var a = [];  
for (var i = 0; i < 10; i++) {  
    a[i] = function() {  
        console.log(i);  
    }  
}  
console.log(a);
a[1](); // 10  

/*2*/
console.log(i); // 输出：undefined  
/*console.log(j);*/ // 报错  
var i = 5;  
/*let j = 10; */
/*3*/
var i= 6;  
if (i > 5) {  
   // i = 3; // 报错  
    let i=0;
    console.log(i);
} 


/*4*/
function func() { // 报错  
    var i= 1;  
    let i = 1;  
}  
function func() { // 报错  
    let i= 1;  
    let i = 1;  
}  