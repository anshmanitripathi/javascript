let inp = document.querySelector("input");

// inp.addEventListener("keyup", function(event){
//     console.log(event);
//     console.log("Key is pressed.")
// })
// 

inp.addEventListener("keyup", function(event){
        console.log("code = ", event.code);
        if(event.code == "ArrowDown"){
            console.log("character moves downward.")
        }else if(event.code == "ArrowUp"){
            console.log("character moves upward.")
        }else if(event.code == "ArrowRight"){
            console.log("character moves Right.")
        }else if(event.code == "ArrowLeft"){
            console.log("character moves Left.")
        }
    })


let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("form submitted");
})