const [a,b,c,d,e] ="Hello";  
console.log(a);   //H  
console.log(b);   //e  
console.log(c);   //l  
console.log(d);   //l  
console.log(e);   //o 
/*var name = '丁香医生';
var desc = '丁香医生是面向大众的科普性健康类网站';
var html = `公司名：${name}    简介：${desc}`;
console.log(html);*/
var name = '丁香医生';
var desc = '丁香医生是面向大众的科普性健康类网站';
console.log(`公司名：${name}简介：${desc}`);
console.log(`string text line 1 
string text line 2`);
///*#在标签函数的第一个参数中，存在一个特殊的属性raw ，
//　可以通过它来访问模板字符串的原始字符串。*/
 function tag(strings, ...values) {
                console.log(strings.raw[0]);
                console.log(values);
                // "string text line 1 \n string text line 2"
            }
            tag `string text line 1 \n string text line 2`;
