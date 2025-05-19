function noDuplicate (array){
    let unique = [];
    for(let item of array){
        if(unique.includes(item) == false){
            unique.push(item);
        }
    }
    return unique;
}

let arr1 = noDuplicate([1,5,61,5,87,7,5,81,61]);
console.log(arr1);