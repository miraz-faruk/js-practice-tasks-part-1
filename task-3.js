// Write a function to count the number of vowels in a string. 

function countVowel(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

const string = "HelloOoooooOOOOO World";
const output = countVowel(string);
console.log(output);