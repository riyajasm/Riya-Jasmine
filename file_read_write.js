const fs= require("fs")
console.log("starting")
// fs.writeFileSync("riya.txt","Riya is a good girl she is passion to do web development")
// console.log("riya.txt")
fs.writeFile("riya.txt","Riya is a good girl ,,,she is passion to do web development",()=>{
    fs.readFile("riya.txt",(e,d)=>{
        console.log(e,d.toString())
    })
})
console.log("ending")