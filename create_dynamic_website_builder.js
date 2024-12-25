function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backendeee | Sigma Web Dev video #2", "CodejjjWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

// console.log("heee...")
// alert("wecome to my design")
// function createCard(title, cName, views, monthsOld, duration, thumbnail){
   // Finish this function
//    let view=views/1000;
//     document.querySelector(".r").innerHTML=title;
//     if(view<999999)
//     {
        
//         document.querySelector(".box2").innerHTML=cName+" . "+view+"Kviews . "+monthsOld+" months ago"
//     }
//     if(view>999999)
//         {
            
//             document.querySelector(".box2").innerHTML=cName+" . "+view+"M views . "+monthsOld+" months ago"
//         }

    // let img = document.createElement("img"); // Create an img element
    // img.src = thumbnail;
    // let container = document.querySelector(".box1"); 
    // container.innerHTML = "";
    // container.append(img);
   
     

// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")