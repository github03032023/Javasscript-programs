// Question no 2
// Factorial of a given number


function factorial(input) {
    let result = 1;
    for(let i=input; i>=1; i--){
        result = result * i;
    }
    return result;
}

const input = 5;
let factorialResult = factorial(input);
console.log(`Factorial of ${input} is`, factorialResult);