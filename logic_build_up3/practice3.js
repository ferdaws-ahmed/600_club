function checkOddNumber ( array ){
    let newArr = [];
    for ( num of array){
        if(num % 2 !== 0){
            newArr.push(num);
        }
    }
    if(newArr.length == 0){
        return "No odd numbers found."
    }
    else{
        return "Odd numbers found."
    }
}

let arr1 = checkOddNumber([2,2,4,6,8,10]);
let arr2 = checkOddNumber([2,3,2,4,6,8,10]);

console.log(arr1);
console.log(arr2);