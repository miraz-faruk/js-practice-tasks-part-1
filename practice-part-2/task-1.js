// Find the lowest number in the array below. 

function findLowestNumber(arr) {
    let lowest = arr[0];
    for (const number of arr) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 137];
const result = findLowestNumber(heights2);
console.log(result);
