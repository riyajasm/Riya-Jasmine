console.log("heloooo")

async function sleep()  {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(123)
      }, 1000);
    })
}
function sum(pa,b,c) {
    return a+b+c;
}
(async function main() {
    
    // let a= await sleep()
    // console.log(a)
     console.log(a3)
    let [x,y,...r]=[1,2,6,3,4,6,7]
    console.log(x,y)
    let obj={
        a:1,
        b:22,
        c:111
    }
    let {a,c}=obj
    console.log(a,c)
    var a3=6;
    let arr=[4,5,6]
    console.log(sum(...arr))
})()
