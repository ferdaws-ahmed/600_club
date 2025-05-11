function check (num){
    if(num % 13 == 0){
        return true;
    }
    else{
        return false;
    }
}
let result = check(39);
console.log(result);