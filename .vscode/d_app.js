let a = prompt("Enter the first number : ");
let b = prompt("Enter the second number : ");
let c = prompt("Enter the third number : ");

if(a>b && a>c){
    console.log(`${a} is largest.`);
} else if(b>a && b>c){
    console.log(`${b} is largest.`);
}else if(a == b && b==c){
    console.log(`All are equals.`);
} else{
    console.log(`${c} is largest.`);
}

let name = "helloAnsh";
console.log(name.slice(5,name.length).replace("A", "K"));
if(name[4] == name[4].toLowerCase()){
    console.log("lower case");
} else{
    console.log("Upper Case");
}


let arr = [1, 34, 55, 77, 12];
console.log(arr.slice(0,3));
console.log(arr.slice(arr.length - 3,arr.length));
let item = 66;
if(arr.indexOf("66") == -1){
    console.log("Not Found");
} else{
    console.log("Found");
}

str = "";
if(str.length == 0){
    console.log("Empty String.");
} else{
    console.log("Not a Empty String");
}

