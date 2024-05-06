let para1 = document.createElement("p");
para1.innerText = "Hello hi bye";
document.querySelector("body").append(para1);

let h3 = document.createElement("h3");
h3.innerText = "Ansh Mani Tripathi";
document.querySelector("body").append(h3);


let div = document.createElement("div");
let h1 = document.createElement("h2");
let para2 = document.createElement("para2");

h1.innerText = "I m inside div";
para2.innerText = "me too";

div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").append(div);