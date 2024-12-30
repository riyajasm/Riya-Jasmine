import fs from "fs/promises"
let a=await fs.readFile("riya.txt")
let b=await fs.appendFile("riya.txt","\n\n\nvery gooood machaa")
console.log(a.toString(),b)