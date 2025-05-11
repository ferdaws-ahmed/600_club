function posOrNeg (n){
    if (n > 0){
        let double = n * 2;
        return double;
    }
    else{
        let triple = n * 3;
        return triple;
    }
}
let result = posOrNeg(-5);
console.log(result);