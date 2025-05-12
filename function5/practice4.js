function friendsArray ( array){
    let sum = 0;
    for (let num of array){
        if(num % 4 == 0){
            sum = sum + num;
        }
    }
    return sum;
}

let arr = [2,4,5,7,8,32,45];
let result = friendsArray(arr);
console.log(result);