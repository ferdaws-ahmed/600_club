function findOddNumberAndMinus (array){
    let odd = [];
    for (num of array){
        if(num % 2 !== 0){
            odd.push(num -1);
        }
    }
    return odd;
}

let arr1 = findOddNumberAndMinus([3,5,3,6,8,4,7,9]);
console.log(arr1);