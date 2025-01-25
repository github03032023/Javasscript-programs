// Question no 5
// sum of digits of a number 


function sumOfDigits(input, numOfDigits){
    var sum = 0;
    var digit = 0;
    while(numOfDigits > 0){
        digit = input % 10;
        sum = sum + digit; 
        input = Math.floor(input / 10);
       
        --numOfDigits;
    }
    return sum;
}


let input = 3671122;
const numOfDigits = (input) =>{
    return input.toString().length;
}
const n = numOfDigits(input);
console.log(`No of digits of ${input} is `, n);
let sumofDigitsOfNum = sumOfDigits(input, n);

console.log(`Sum of digits of ${input} is `, sumofDigitsOfNum);
