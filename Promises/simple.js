// Function using Callback

const CBFunction = (number, callback) => {
    if(number !== 5) {
        callback({
            status: 502,
            error: "number not five" 
        });
    } else {
        callback({
            status: 200,
            response: "number is five",
            error: null
        });
    }
}

// Calling a callback using function
console.log("<----Calling a callback type function---->");

CBFunction(5, ({status, response, error }) => {
    if(error) {
        console.log("error encountered: ", error, status);
    } else {
        console.log("success: ", status , response);
    }
});



// Using Promise
// First function using promise
const PromiseFunctionOne = (number) => {
    return new Promise((resolve, reject) => {
        if(number !== 5) {
            reject({
                status: 502,
                error: "number not five" 
            });
        } else {
            setTimeout( () => {
                resolve({
                    status: 200,
                    response: "number is five",
                    error: null
                });
            }, 2000);
        }
    })
}



PromiseFunctionOne(5).then(({status, response, error}) => {
    console.log("<----Calling first function using promise---->");
    console.log("success: ", status , response);
}).catch(({status, error}) => {
    console.log("<----Calling first function using promise---->");
    console.log("error encountered: ", error, status);
});

// Second function using promise
const PromiseFunctionTwo = (number) => {
    return new Promise((resolve, reject) => {
        if(number !== 10) {
            reject({
                status: 502,
                error: "number not ten" 
            });
        } else {
            resolve({
                status: 200,
                response: "number is ten",
                error: null
            });
        }
    })
}


// Third function using promise
const PromiseFunctionThree = (number) => {
    return new Promise((resolve, reject) => {
        if(number !== 15) {
            reject({
                status: 502,
                error: "number not fifteen" 
            });
        } else {
            resolve({
                status: 200,
                response: "number is fifteen",
                error: null
            });
        }
    })
}


//Example of Promise.all. It return the response of all functions in an array. Otherwise it return the response where the error occured


Promise.all(
    [
        PromiseFunctionOne(5),
        PromiseFunctionTwo(10),
        PromiseFunctionThree(15)
    ]
).then((responses) => {
    console.log("<----Calling Promise.all---->");
    console.log(responses);
}).catch((error) => {
    console.log("<----Calling Promise.all---->");
    console.log(error);
});



/* Example of Promise.race. It returns the response of first function where it is fulfilled or return the response of function where it got failed first.
   For race all promises should be successful otherwise the first function where error occured it's error is returned */

Promise.race(
    [
        PromiseFunctionOne(5),
        PromiseFunctionTwo(10),
        PromiseFunctionThree(15)
    ]
).then((response) => {
    console.log("<----Calling Promise.race---->");
    console.log(response);
}).catch((error) => {
    console.log("<----Calling Promise.race---->");
    console.log(error);
});
