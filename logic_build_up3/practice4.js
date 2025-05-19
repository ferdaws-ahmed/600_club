function oddAvvrg (array){
    let newArr = [];
    for (num of array){
        if (num % 2 !== 0){
            newArr.push(num);
        }
    }
    let sum = 0;
    for ( i = 0; i < newArr.length; i++){
        sum = sum + newArr[i];
    }
    if(newArr.length == 0){
        return 0;
    }
    let avvr = sum / newArr.length;
    return avvr.toFixed(2);
}


let arr1 = oddAvvrg([2,4,6,8,10,12]);
let arr2 = oddAvvrg([3,2,5,7,12,6,5,9]);

console.log(arr1);
console.log(arr2);