console.log("this is promisese 1 concept")
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
 console.log("this is promisese 2 concept")
 let p2=new Promise((resolve,reject) => {
   let a=Math.random();
   if(a<0.8){
    reject("not aloow < 0.5 values")
   }
   else{
    setTimeout(() => {
        console.log("yes u r not < 0.8 accepted")
        resolve("jasmine")
    }, 1000);
   }
 })
 console.log("this is promisese 3 concept")
 let p3=new Promise((resolve,reject) => {
   let a=Math.random();
   if(a<0.1){
    reject("not aloow < 0.1 values")
   }
   else{
    setTimeout(() => {
        console.log("yes u r not < 0.1 accepted")
        resolve("shaik")
    }, 0);
   }
 })
 let p4=new Promise.all([p1,p2,p3])
 p3.then((a) => {
   console.log(a)
 }).catch((error) => {
   console.log(error)
 })
  
 