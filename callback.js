console.log("hello riya")
console.log("not asynchronous")
setTimeout(() => {
    console.log("execute at last asynchronous")
},1000);
setTimeout(() => {
    console.log("execute at ? asynchronous")
},0);
function callback(e,ra){
    console.log(e)
    ra()
  }
  const ra=() => {
    console.log("RA fun")
  }
 const s=(src,callback) => {
    let b=document.createElement("script")
  // b.src=src;
   b.ons=callback("riya",ra)
 }
//  const callback=(e,ra) => {
//    console.log(e)
//    ra()
//  }
//  const ra=() => {
//    console.log("RA fun")
//  }

s("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
 

 
 