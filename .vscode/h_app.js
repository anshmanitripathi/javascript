function poem() {
    console.log("lorem ijf jvcaweiuef wend kjsed vnizuwiuansh mani tripathi ");
}

console.log(poem());

// ---------------------------------------------------------------------------------------------------------

function dice(){
    return Math.floor(Math.random() * 6) + 1;
}

let d = dice();
console.log(d);

// ======================================================================================================

function average(a,b,c){
    return (a+b+c)/3;
}

let avg = average(34,17,17);
console.log(avg);

// #######################################################################################################

let arr = [ "hi", "hello", "ansh", "bye"];

function concatenate(){
    let result = "";
    for(let i=0; i<arr.length; i++){
        result = result + arr[i];
    }

    return result;
}

str = concatenate(arr);
console.log(str);

// -------------------------------------------------------------------------------------------------------

const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
};

calculator.add(12,12);