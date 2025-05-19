function calculationOfObject(object = {principal: 1000, rate:5}){
    return object.principal * object.rate / 100;
}
const result = calculationOfObject();
console.log(result);

const calculate1 = {principal: 100, rate:10};
const result2 = calculationOfObject(calculate1);
console.log(result2);