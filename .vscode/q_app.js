
// ======== using callback hell ===========

// function saveToDB(data, success , failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     } else{
//         failure();
//     }
// }

// saveToDB( "Ansh Mani Tripathi",
//     ()=>{
//         console.log("Success : Your data was saved");
//         saveToDB("Hello",
//             ()=>{
//                 console.log("Success2 : Your data was saved");
//                 saveToDB("ANUP",
//                     ()=>{
//                         console.log("Success3 : Your data was saved");
//                     },
//                     ()=>{
//                         console.log("failure3 : Your data not saved");
//                     }
//                 )
//             },
//             ()=>{
//                 console.log("failure2 : Your data not saved");
//             }
//     )
//     },
//     ()=>{
//         console.log("failure : Your data not saved");
//     }
    
// )


// using promises =========

function saveToDB(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success: data saved");
        } else{
            reject("failur: weak connection");
        }
    })
}


saveToDB("Ansh")
    // .then(()=>{                     //what to do when success
    //     console.log("Promises was resolved : data1 saved");
    //     saveToDB("Anup")
    //         .then(()=>{        // promise chaining             
    //             console.log("Promises was resolved : data2 saved");
    //         })
    // })

    // OR

    .then((result)=>{                  
        console.log("Promises was resolved : data1 saved");
        console.log("Result of promise : ", result);
        return saveToDB("Anup");
    })    
    .then((result)=>{                  
        console.log("Promises was resolved : data2 saved");
        console.log("Result of promise : ", result);
        return saveToDB("prince");
    })
    .then((result)=>{
        console.log("Promises was resolved : data2 saved");
        console.log("Result of promise : ", result);
    }) 

    .catch((error)=>{                    // wht do to when faliure
        console.log("promises are rejected");
        console.log("Error of promise : ", error);
    })