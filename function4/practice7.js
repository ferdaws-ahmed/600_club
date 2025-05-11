function calculation (num1, num2){
    let mul = num1 * num2;
    if(mul > 100){
        mul = mul / 2;
    }
    return mul;
}
let result = calculation(20,20);
console.log(result);