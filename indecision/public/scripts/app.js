"use strict";

var square = function square(x) {
    return x * x;
};
function squareName(x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// };
var squareArrow = function squareArrow(x) {
    return x * x;
};
// All arrow functions are anonymous 
console.log(square(8));
console.log(squareName(5));
console.log(squareArrow(9));

//challenge
// const getFirstName = (fullName) => {
//     return fullName.split(" ")[0];
// };

var getFirstName = function getFirstName(fullName) {
    return fullName.split(" ")[0];
};

console.log(getFirstName('Maky Brown'));
