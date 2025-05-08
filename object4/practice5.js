let animal = {
    Name: "Tiger",
    location: "Sundarban"
}
Object.freeze(animal);
animal.location = "KolaBagan";
console.log(animal);