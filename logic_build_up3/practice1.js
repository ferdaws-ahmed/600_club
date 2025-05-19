function evenAvvr (array){
    let Even = [];
    for(let num of array){
        if(num % 2 == 0){
            Even.push(num);
        }
    }
    let sum = 0;
    for ( i = 0; i < Even.length; i++){
        sum = sum + Even[i];
    }
    if(Even.length == 0){
        return 0;
    }
    let avvr = sum / Even.length;
    return avvr;
}

let arr1 = evenAvvr([2,5,4,6,2,8,9]);
let arr2 = evenAvvr([3,5,3,7,9]);


console.log(arr1);
console.log(arr2);