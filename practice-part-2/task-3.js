// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. 

function calculateElectronicsBudget(numberOfLaptops, numberOfTablets, numberOfMobiles) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;
    const total = (laptop * numberOfLaptops) + (tablet * numberOfTablets) + (mobile * numberOfMobiles);
    return total;
}

const numberOfLaptops = 2;
const numberOfTablets = 3;
const numberOfMobiles = 4;
const totalBudget = calculateElectronicsBudget(numberOfLaptops, numberOfTablets, numberOfMobiles);
console.log(totalBudget);
