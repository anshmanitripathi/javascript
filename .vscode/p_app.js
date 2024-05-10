function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans =  two() + one();
    console.log(ans);
}

three();    

// ///////////////////////////////////////////////////////////////////////////////

let h1 = document.querySelector("h1");

function changeColor( color , delay , nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange){
            nextColorChange();
    }}, delay);
}

changeColor("red", 1000 , ()=>{
    changeColor("green", 1000, ()=>{
        changeColor("yellow", 1000, ()=>{
            changeColor("blue", 1000, ()=>{
                changeColor("grey", 1000);
            })
        })
    })
})


//  callback hell.
