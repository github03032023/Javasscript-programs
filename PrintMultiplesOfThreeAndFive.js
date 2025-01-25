//Question no 1
// prints numbers from 1 to n with special display messages

// print multiples Of Three as Fizz
// print multiples Of Three as Buzz
// both 3 and 5 is FizzBuzz
// Other than these are printed as normal numbers
function printMultiplesOfThreeAndFive(start, end) {
    for (let i = start; i <= end; i++) {
        if ((i % 3 === 0) && (i % 5 === 0) ) {
            console.log( "Number-"+i+" which is a multiple of 3 and 5, is printed as","FizzBuzz");
        } else if (i % 5 === 0) {
            console.log( "Number-"+i+" which is a multiple of 5, is printed as","Buzz");
        } else if (  (i % 3 === 0)) {
            console.log( "Number-"+i+" which is a multiple of 3, is printed as","Fizz");
        }else{
            console.log( "Number-"+i+" which is a neither a multiple of 3 or 5, is printed as", i);
        }      
    }
}

// Call the function
printMultiplesOfThreeAndFive(1, 50);