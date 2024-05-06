let btn = document.querySelector("button");
console.dir(btn);


btn.onclick = function(){
    alert("button was clicked.");
}

btn.onmouseenter = function(){
    alert("Mouse enters.");
}

btn.addEventListener("click", function(){
    console.log("Button was clicked.");
    this.style.backgroundColor = "green"; 
});