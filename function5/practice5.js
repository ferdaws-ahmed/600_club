function getNumber (num){
    if(num < 20){
        let mul = num * 2;
        return mul;
    }
    else{
        let div = num / 20;
        return div.toFixed(2);
    }
}

let result = getNumber(15);
console.log(result);