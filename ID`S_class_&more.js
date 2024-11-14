console.log("riya");
//console.log(document.body.firstElementChild.children );
let b=document.getElementsByClassName("box");
//console.log(b);
b[4].style.backgroundColor="green";
document.getElementById("1").style.backgroundColor="red "
document.querySelector(".box").style.backgroundColor="aqua"
document.querySelectorAll(".box").forEach(e=>{
    //e.style.backgroundColor="purple"
})
let e= document.getElementsByTagName("div")
e[4].matches("#1");
