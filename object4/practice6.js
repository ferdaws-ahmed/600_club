let food = {
    Name: "Pizza",
    price:500,
    size: "Large"
}
Object.seal(food);
food.chicken = "besi besi diyen";
food.price = "free te dile valo hoy";
console.log(food);