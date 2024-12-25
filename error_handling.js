let a=prompt("enter 1st num")
let b=prompt("enter 2nd num")
// let sum = a + b;
// the above line gives a string...
let sum = parseInt(a) + parseInt(b);
let c=document.querySelector(".box").innerHTML=" the sum is " + sum;
if(isNaN(a)||isNaN(b)){
    document.querySelector(".box").innerHTML= " :only numbers allow";
}
let x=5;
function riya() {
    try{
        console.log("the sum is",sum*x)
        return true
    }catch(error){
        console.log("define x bhai...")
        return false
    }
    finally{
        console.log("code hogaya")
    }
}
riya()