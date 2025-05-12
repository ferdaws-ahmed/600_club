function negativeNumber (array){
    let sum = 0;
    for(let num of array){
        if(num < 0 ){
            sum = sum + num;
        };
    };
    return sum;
}

let arr = [2,53,-32,54,-24,-6, -5];
let result = negativeNumber(arr);
console.log(result);