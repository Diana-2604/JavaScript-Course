// for loop
const names = ["Mark", "Sarah", "Ebony"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // 0, 1, 2
}

const numbers = [1, 2, 3, 4];

for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j] * 2);
}

// while loop
let password = "tomorrow";
let userGuess = "";

while (userGuess !== password) {
   userGuess = prompt("Please enter your password");
}

alert("Login Successful");

// do while loop
let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number--
} while (number > 0);

console.log(original + " factorial is " + factorial);