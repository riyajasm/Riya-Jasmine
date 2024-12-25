 let b=document.getElementById("btn")
 b.addEventListener("click",() => {
   document.querySelector(".box").innerHTML="<b> content will change when we click it <b> u r great riya u r a web developer"
 }
 )
 b.addEventListener("contextmenu",() =>{
    alert("dont hack us by right click please")
 })
 b.addEventListener("keydown",(a) =>{
    console.log(a,a.key,a.keycode)
 })
 b.addEventListener("dblclick",() => {
    document.querySelector(".box").innerHTML="<b> double clicked<b>"
  })
  b.removeEventListener("dblclick",() =>{}
  )