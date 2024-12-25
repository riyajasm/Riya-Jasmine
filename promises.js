 console.log("this is promisese concept")
 let p1=new Promise((resolve,reject) => {
   let a=Math.random();
   if(a<0.5){
    reject("not aloow < 0.5 values")
   }
   else{
    setTimeout(() => {
        console.log("yes u r not < 0.5 accepted")
        resolve("riya")
    }, 2000);
   }
 })
 p1.then((a) => {
   console.log(a)
 }).catch((error) => {
 console.log(error)
 })
 
 
 
