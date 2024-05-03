let arr = [1,23,123,131,34,2,46,73,12,33,45];

function greater(a , arr){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > a){
            console.log(arr[i]);
        }
    }
}

greater(50 , arr);

// =============================================================================================================


function uniqueChar(str){
    result = "";
    for(let i=0; i<str.length; i++){
        currentChar = str[i];
        if(result.indexOf(currentChar) == -1){
            result+=currentChar;
        }
    }
}

uniqueChar("aaddadadggffggfss");
console.log(result);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let country=["Australia","Germany","UnitedStatesofAmerica"];

function longest(list){
    let max = list[0];
    for(let i = 0; i< list.length; i++){
        if(list[i].length > max.length){
            max = list[i];
        }
    }

    console.log(`Longest is : ${max}`);
}

longest(country);

// =====================================================================================================



function generateRandom(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}

let r = generateRandom(4, 15);
console.log(r);

