console.log("working")
let b=document.querySelector(".rijas").children
function getRandomColor(){
let val1=Math.ceil(0+Math.random()*255)
let val2=Math.ceil(0+Math.random()*255)
let val3=Math.ceil(0+Math.random()*255)
return `rgb(${val1},${val2},${val3})`
}
Array.from(b).forEach(e=>{
    e.style.backgroundColor=getRandomColor()
   e.style.color=getRandomColor()
})