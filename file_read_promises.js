import fs from "fs/promises"
let a=await fs.readFile("riya.txt")
let b = await fs.writeFile("riya.txt","passion \n\n\n web development")
console.log(a.toString())
console.log(b)