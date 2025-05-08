let phone = {
    brand: "Samsung",
    model: "Galaxy s21",
    price: 85000
};

let keys = Object.keys(phone);
for(let keyss of keys){
    console.log(keyss,phone[keyss]);
}