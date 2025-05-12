function whoIsBig (array){
    if(array[0] < array[1]){
        return array[0];
    }
    else{
        return array[1];
    }
}
let arr = [20, 45, 78];
let total = whoIsBig(arr);
console.log(total);