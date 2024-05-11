let h1 = document.querySelector("h1");

function changeColor( color , delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}


async function demo(){
   await changeColor("red", 1000);
   await changeColor("green", 1000);
   await changeColor("blue", 1000);
   await changeColor("pink", 1000);
   await changeColor("yellow", 1000);

}

demo();
// changeColor("red", 1000)
// .then(()=>{
//     console.log("color changed");
//     return changeColor("yellow", 1000);
// })
// .then(()=>{
//     console.log("color changed");
// })

// .catch(()=>{
//     console.log("color not changed");
// })



async function greet(){
    // throw("weak connecton");
        return "hello";
}

greet()
    .then(()=>{
        console.log("resolved");
    })

    .catch(()=>{
        console.log("rejected");
    })