let n = prompt("Enter the Number : ");
for(let i=1; i<=n; i++){
    if(i%2==0){
        console.log(i);
    }
}

let o = prompt("Enter the Number : ");
for(let i=1; i<=n; i++){
    if(i%2!=0){
        console.log(i);
    }
}

let arr=[1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0;i<arr.length;i++){
    if(arr[i] == num){
       arr.splice(i,1);
    }
}

console.log(arr);


let number = 123456;
let c = 0;

while(number!=0){
    number = Math.floor(number/10);
    c = c+1;
}

console.log(`Count = ${c}`);