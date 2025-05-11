function calculation (num){
    if(num > 10){
        let div = num / 10;
        return div;
    }
    else{
        let mul = num * 10;
        return mul;
    }
}
let result = calculation(10);
console.log(result);