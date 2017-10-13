console.log([1, 4, -5, 10].find((n) => n < 0) ); 
// -5  
[1, 5, 10, 15].find(function(value, index, arr) {
	console.log(value);
	console.log(index);
	console.log(arr);
  return value > 9;  
}) // 10  