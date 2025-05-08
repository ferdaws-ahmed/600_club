let headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
}
Object.freeze(headphone);
headphone.size = 6;
console.log(headphone);