function sum (num1, num2, ...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(sum(1,3,5,6,7,7,9));