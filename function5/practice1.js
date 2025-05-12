function sumOfOddNumber (num){
    let sum = 0;
    for ( let number of nums){
        if (number % 2 != 0){
            sum = sum + number;
        }
    }
    return sum;
}
let nums = [5,15,8,7];
let total = sumOfOddNumber(nums);
console.log(total);