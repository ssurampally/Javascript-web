function fetchdata(callme) {    // while this function is being run, data result is displayed when call back function called.
    console.log("Fetching data");
setTimeout( () => {
    const dataresult = 'My name is Sreekanth'
    callme(dataresult)
}, 2000)
};

function dataready(dataresult) {
    console.log(dataresult);

};

fetchdata(dataready); // call me when data ready, I am passing call back function as an argument to Async function
console.log("I am doing doine other checks");




  