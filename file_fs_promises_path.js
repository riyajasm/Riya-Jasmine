console.log("helo..")
const fs=require("fs")
console.log("bye..")
fs.writeFile("riya.txt","riya is a very good girl",()=>{
    console.log("done")
    fs.readFile("riya.txt",(error,data)=>{
    console.log(error,data.toString())
    })
})
fs.appendFile("riya.txt","  riya is a very good girl.........",(e,d)=>{
    console.log(d)
})
   
console.log("good bye")
