function sumOfArray (array){
    let newArr = []
    for(let num of array){
        if(num % 3 == 0){
            newArr.push(num);
        }
    }
    let sum = 1;
    for(let i = 0; i < newArr.length; i++){
        sum = sum * newArr[i];
    }
    return sum;
    
    
}

let arr = [2,3,4,5,9,3,3];
let result = sumOfArray(arr);
console.log(result);