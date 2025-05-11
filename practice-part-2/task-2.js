// Find the friend with the smallest name. 

function findSmallestName(names){
    let smallest = names[0];

    for(const name of names){
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result = findSmallestName(names);
console.log(result);