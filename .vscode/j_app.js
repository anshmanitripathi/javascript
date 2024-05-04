//  this keyword

let person = {
    name : "Ansh",
    eng : 91,
    hin : 80,
    maths : 95,
    comp : 100,
    getaverage(){
        let avg = (this.eng + this.maths + this.comp)/3;
        console.log(`Average = ${avg}`);
    }
};


// ///////////////////////////////////////////////////////////////////////////////////////////////////////


let id = setInterval(()=> {
    console.log("Hello");
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);

setTimeout(() => {
    console.log("Hello Ansh Mani Tripathi")
}, 5000);


// /??????????????????????????????????????????????????????????????????????????????????????????????????////

const AvgArr = (arr) => {
    let sum =0;
    for(let i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    let avg = sum/arr.length;
    console.log(`average is  ${avg}`);
}

let arr = [3,5,5,4,3,5,2,5];
AvgArr(arr);

// ====================================================================================

let num=4; 
const isEven=(num)=>num%2==0;

isEven(num);

if(isEven == 0){
    console.log("Even");
}else{
    console.log("odd");
}