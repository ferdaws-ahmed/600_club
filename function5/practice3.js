function myAge (num){
    if (num > 45){
        return 45;
    }
    else if(num > 18){
        return num;
    }
    else{
        return 18;
    }


}

let result = myAge(19);
console.log(result);