async function random(){
    let a=Math.random()
    let b=Math.ceil(a*7)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Initializing Hacking")
        }, b*100);
       
    })
}
async function randoms(){
   let t= setInterval(() => {
        let last=document.body.getElementsByTagName("div")
        last= last[last.length-1]
        if(last.innerHTML.endsWith("...")){
             last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)

        }
        else{
            last.innerHTML=last.innerHTML+"."
        }
    }, 100);
    let data = await random()
    console.log(data);
    document.querySelector(".box").innerHTML=data
    // document.querySelector(".box").innerHTML =" Reading your Files..."
}
randoms()