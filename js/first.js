/* console.log("im running my first javascript code!!!");

//object
// collection of different variables
const student = {
    // key : value pairs.
    fullName: 'Raviteja',
    age: 24,
    place: 'hyderabad'
}
console.log(student.age); //1, way to access object member
console.log(student["age"]); //2, way to access object member

const details = {
    name: 'raviteja',
    num: 7893055964,
    rating: 9.5
}
console.log(typeof details["num"]); // to check data-type
*/

/* functions

// function parameters are local variables with block scope
function sum(a, b) {
    console.log(a + b);
}
//function will return value
function sum(x, y) {
    z = x + y;
    return z;
}
let result = sum(3, 4);
console.log(result);
*/

/* Arrow Functions
const arrMul = (a, b) => {
    console.log(a * b);
}
*/

/* count vowels in string by function
function contVow(str) {
    let count = 0;
    for (const char of str) {

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
*/

/* //counting the vowls in string by arrow fuction 
const contVow = (str) => {
    let count = 0;
    for (const char of str) {

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
*/

/* for Each loop
// only used for arrays
// map, filter, reduce
// higher order function(either take another function as parameter or return another function as their output)
//for each call back contaions Value, index and array itself

let arr = [2, 3, 4, 5, 6, 7];
arr.forEach((val) => {
    console.log(val);
});
*/

/* max marks

let marks = [12, 34, 67, 87, 56, 67, 43, 58];
const max_marks = marks.filter((mark) => {
    return mark > 50;
})
console.log(max_marks);
*/

/*// to find sum of n numbers by foreach methods and loops
let n = prompt("enter a number");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

const sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log(sum);
*/
/*
// event handling and evet removers
// inline handling
//js handling

let btn1 = document.querySelector("button");
// btn1.onmouseover = () => {
//     console.log("js mouseover");
// }

// event listners
btn1.addEventListener("click", () => {
    console.log("button action by event listners");
});
*/
/* // rock paper scissors game

let user_score = 0;
let comp_score = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const user_para = document.querySelector("#user-score");
const comp_para = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranInx = Math.floor(Math.random() * 3);
    return options[ranInx];
}

const draw = () => {
    console.log("game draw");
    msg.innerHTML = "game was draw";
}
const show_winner = (userwin) => {
    if (userwin) {
        // msg.innerText = `you win, ${userchoice} beats ${comchoice}`;
        user_score++;
        user_para.innerHTML = user_score;
        msg.innerText = "you win";
        console.log("you win !!!!!!");
        // msg.style.backgroundcolor = "green";
    } else {
        // msg.innerText = `you lose. ${comchoice} beats ${userchoice}`;
        comp_score++;
        comp_para.innerHTML = comp_score;
        msg.innerText = "you lose";
        console.log("you lose");
    }
}
const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const comchoice = gencompchoice();
    console.log("user choice = ", comchoice);

    if (userchoice === comchoice) {
        draw();
    } else {
        let userwin = true;
        if (user_score === "rock") {
            userwin = comchoice === "paper" ? false : true;
        } else if (user_score === "paper") {
            userwin = comchoice === "scissor" ? false : true;
        } else {
            userwin = comchoice === "rock" ? false : true;
        }
        show_winner(userwin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked");
        playgame(userchoice);
    })
})
*/