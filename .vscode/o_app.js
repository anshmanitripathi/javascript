inp = document.querySelector("input");
para = document.querySelector("p");

inp.addEventListener("input", function(){
    para.innerText = inp.value;
})


