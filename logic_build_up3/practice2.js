function oddDouble (array){
    let odd = [];
    for (num of array){
        if(num % 2 !== 0){
            odd.push(num * 2);
        }
    }
    
    return odd;
}

let arr1 = oddDouble([2,5,6,7,12,35]);

console.log(arr1);