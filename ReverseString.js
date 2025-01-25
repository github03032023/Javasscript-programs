// Question No 9
// Reverse a String

function reverseString(inputString){
    let StringLength = inputString.length;
    let reversedString ='';
    for(i=StringLength-1; i>=0; i--){
        reversedString += inputString[i];
    }
    return reversedString;
}


const str = "Adventurous";
// let inputArray = Array.from(str); // to convert a string into an array of characters
let reversedString = reverseString(str);
console.log(`Reversed string of ${str} is`, reversedString);