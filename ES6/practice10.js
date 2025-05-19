function countTax (object = {salary:50000, tax: 10}){
    const tax = object.salary * object.tax / 100;
    const totalTax = object.salary - tax;
    return totalTax;
}

const result1 = countTax();
console.log(result1);


const person2 = {salary:100000, tax:30};
const result2 = countTax(person2);
console.log(result2);