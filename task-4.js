// Write a function to find the longest word in a given string.

function findLongestWord(str){
    const words = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}

const string = "I am learning Programming to become a programmerrrrrrrrrrrrrrrrrrr";
const output = findLongestWord(string);
console.log(output);