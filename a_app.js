let btn = document.querySelector("button");




btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let random = randomnumber();
    h3.innerText = random;

    let div = document.querySelector("div");
    div.style.backgroundColor = random;

    console.log("Color updated.")
});

function randomnumber(){
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


let p = document.querySelector("p");


function changecolor(){
    this.style.backgroundColor = "red";
}

// p.addEventListener("click", function(){
//     this.style.backgroundColor = "red";
// });

// or

p.addEventListener("click", changecolor);