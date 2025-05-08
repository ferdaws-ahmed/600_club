let laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
}

for(let key in laptop){
     let value = laptop[key];
     console.log(key,value);
}