let numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let values = Object.values(numbers);

let sum = 0;
for ( i = 0; i < values.length; i++){
    sum = sum + values[i];
   
}
console.log(sum);