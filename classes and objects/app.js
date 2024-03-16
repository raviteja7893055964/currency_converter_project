/* // prototype is an object of object itself

const student = {
    full_name: "Raviteja",
    marks: 93,
    printMarks: function() {
        console.log("marks = ", this.marks); // student.marks
    }
}

const student1 = {
    full_name: "Raviverma",
    marks: "99"
}


student1.__proto__ = student; // declaring prototype(reference)
*/

// classes --> class is a template for object
/*
class fortuner {
    start() {
        console.log("car started");
    }
    stop() {
        console.log("car is stoped");
    }
}

let car = new fortuner();
let car2 = new fortuner();
*/

/* // call back hell functions
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data ", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
// callback hell(nested callbacks)
getData(1, () => { // callback function
    getData(2, () => {
        getData(3);
    });
});
//getData(2);
*/

//promises
/*
let promise = new Promise((resolve, reject) => {
    console.log("this is promise function");
    // resolve("promise was resolved");
    reject("promise was rejected");
});
*/
/*
function asyncFun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 5000);
    });
}
console.log("data was fetching");
let p1 = asyncFun();
p1.then((res) => {
    console.log(res);
});
*/
// promise.then for resolve
// promise.catch for reject

// aysnc_await


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success ");
        }, 2000);
    });
}
async function report() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}