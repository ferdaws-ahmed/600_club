let player = {
    Name:"Messi",
    goals:800,
    club: "Inter Miami"
}
Object.freeze(player);
player.height = 72;
console.log(player);