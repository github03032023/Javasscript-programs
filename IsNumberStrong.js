// Question No 8
// check whether a number is strong or not


function sumOfFactorial(digits){
    let result = 1;
    let sumOfFactorial = 0;
    for(let i=0; i<digits.length; i++){
          for(let j=digits[i]; j>1; j--){
            result = result * j;
        }
        sumOfFactorial = sumOfFactorial + result;
        result = 1;
        
    }
    return sumOfFactorial;
}

let isStrong = false;
let input = 145;
const digits = input.toString().split('').map(Number); // array of numbers
let factorialSum = sumOfFactorial(digits);
// Condition for a number to be strong
if(factorialSum === input) {
    isStrong = true;
}
if (isStrong) {
    console.log(`The number ${input} is Strong`);
}else {
    console.log(`The number ${input} is not Strong`);
}
