function getAvrg (...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        
    }
    let avvrg = sum / numbers.length;
    return avvrg;
}

console.log(getAvrg(1,2,3,4,5,6,7));