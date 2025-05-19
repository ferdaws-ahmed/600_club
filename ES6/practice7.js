function getObjectValue(product = {price:10,quantity:1}){
    return product;
}
const invoice = {price: 20, quantity:2};
const result = getObjectValue(invoice);
console.log(result);

const result2 = getObjectValue();
console.log(result2);