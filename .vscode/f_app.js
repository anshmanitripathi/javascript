let num = 123;
let sum = 0;

while(num !=0){
    let r = num%10;
    num = Math.floor(num/10);
    sum = sum + r;
}

console.log(`Sum = ${sum}`);


let fact = 1;
let n = 5;
for(let i = 1; i<=5 ; i++){
    fact = fact * i;
}

console.log(`Fcatorial = ${fact}`);


let arr = [43, 24, 53, 62, 2, 56, 12, 34];
let max = -1;
for(let i = 0; i<arr.length ; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(`Maximum = ${max}`);

