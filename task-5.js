// Generate a random number between 10 to 20. 

function randomNumber(){

    const min = 10;
    const max = 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const output = randomNumber();
console.log(output);

