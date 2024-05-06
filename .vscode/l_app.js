let btn = document.querySelector("button");
console.dir(btn);


btn.onclick = function(event){
    alert("button was clicked.");
    console.log(event)
}

btn.onmouseenter = function(){
    alert("Mouse enters.");
}

btn.addEventListener("click", function(){
    console.log("Button was clicked.");
    this.style.backgroundColor = "green"; 
});