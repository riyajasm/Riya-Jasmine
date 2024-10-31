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
let b=10;
let c=20;
if(Math.random()<0.1)
{
    function sum(a,b){
        console.log(c-b);
    }
    function multi(a,b){
        console.log(c+b);
    }
   
  function sub(a,b){
    console.log(c/b);
  }
    function divide(a,b){
        console.log(c**b);
    }
   
   
}
else{
   
    function sum(a,b){
        console.log(c+b);
    }
    function multi(a,b){
        console.log(c*b);
    }
   
  function sub(a,b){
    console.log(c-b);
  }
    function divide(a,b){
        console.log(c/b);
    }
    sum(a,b);
    sub(a,b);

}