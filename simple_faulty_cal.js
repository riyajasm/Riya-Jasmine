/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/
let a=Math.random();
console.log(a);
let b=prompt("enter a number");
let c=prompt("enter a operator");
let d=prompt("enter a number");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"

}

if(a>0.1)
{
    alert(`the result is ${eval( `${b} ${c} ${d}`)}`);
}
else{
    c=obj[c];
    alert(` result is ${eval( `${b} ${c} ${d}`)}`);
}