// Question No 10
//a program to find the number of vowels and consonants in a string


function countVowels(inputCharArray) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < inputCharArray.length; i++) {
        if (vowels.includes(inputCharArray[i])) {
            count++;
        }
    }
    return count; // no of vowels
}


const inputString = "Aeroplane Aviation";
const inputStringWithoutSpaces = inputString.replace(/\s+/g, '');  // to remove space in the string 
const inputCharArray = inputStringWithoutSpaces.toLowerCase().split('');
let vowelCount = countVowels(inputCharArray);
let consonantCount = (inputStringWithoutSpaces.length) - vowelCount; // Consonant count


console.log(`Vowel count of ${inputString} is `, vowelCount);

console.log(`Consonant count of ${inputString} is `, consonantCount);