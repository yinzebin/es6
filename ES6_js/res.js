function rest(...values){
    let sum=0;
    for(var val of values){
        sum+=val;
    }
    return sum;
}
console.log(rest(1,2,3));


console.log(Math.max(...[14,3,7]));
console.log(1,...[2,3,4],5);