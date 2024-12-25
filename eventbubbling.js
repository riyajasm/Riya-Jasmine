document.querySelector(".box4").addEventListener("click",(a) => {
    alert("child was clicked")
    a.stopPropagation()
}
)
document.querySelector(".box3").addEventListener("click",(a) => {
    alert("paernt was clicked")
    a.stopPropagation()
  }
  )
  document.querySelector(".box2").addEventListener("click",(a) => {
    alert("grand parent was clicked")
    a.stopPropagation()
  }
  )
  document.querySelector(".box1").addEventListener("click",(a) => {
    alert("ansistor was clicked")
  }
  )