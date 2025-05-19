function arraydouble(array = [5,10,15]){
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        newArray.push(array[i] * 2);
    }
    return newArray;
}

const result = arraydouble([12,45,65,85,96,32,45,78]);
const result2 = arraydouble();
console.log(result);
console.log(result2);