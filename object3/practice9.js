
let building = {
    floors: 20,
    address: {
        street: "Main Road",
        city: "Dhaka"
    },

    type: "Commercial"
};
for(let key in building){
    let value = building[key];
    console.log(value);
}
