const arr = [43,26,75,25,83];
const addArrayIndex = (array) =>{
    const indexNumber = array.length - 1;
    const add = array[0] + array[indexNumber];
    return add;
}

console.log(addArrayIndex(arr));