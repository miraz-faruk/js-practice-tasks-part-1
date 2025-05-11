// You are given an array of numbers. Count how many times the a number is repeated in the array. 

function numberFind(arr, find){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === find){
            count++;
        }
    }
    return count;
}


const numbers = [5, 6, 12, 98, 5, 10];
const find = 100;
const output = numberFind(numbers, find);
console.log(output);
