const square = function (x) {
    return x * x;
};
function squareName(x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// };
const squareArrow = (x) => x * x;
// All arrow functions are anonymous 
console.log(square(8));
console.log(squareName(5));
console.log(squareArrow(9));

//challenge
// const getFirstName = (fullName) => {
//     return fullName.split(" ")[0];
// };

const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName('Maky Brown'));