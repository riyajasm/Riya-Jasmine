console.log("elo....")
 async function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
          resolve(4555)
        },2000)
        
    })
 }
 async function main() {
    console.log("aync main function")
    let data= await getData()
    console.log(data)
    console.log("data is coming")
 } 
 main()
 //fetch concept.......+++++++........
//  async function concept() {
//     let x=await fetch('https://www.geeksforgeeks.org/javascript-fetch-method/')
//     let data1 =await x.json()
//     console.log(data1)
//  }
//  async function map() {
//     let data1 = await concept()
//     console.log("afer resolve")
//  }
//  map()