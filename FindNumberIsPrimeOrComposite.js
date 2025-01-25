// Question no 3
// to check whether a number is prime or composite


// To find whether a number is prime or composite
function findNumberIsPrimeOrComposite(input){
    // 0 and 1 are neither prime nor composite
  
    if (input <=1 ){
        console.log(`${input} is neither prime nor composite`);
        return;
    }
  // Check for factors from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(input); i++) {

    if (input % i === 0) {
        console.log(`${input} is a composite number`);
        return;
    }
}

console.log(`${input} is a prime number`);
        
}


const input = 9;
findNumberIsPrimeOrComposite(input);