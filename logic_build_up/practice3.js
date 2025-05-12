function hourTosecond (hour){
    let seconds = 3600 * hour;
    return seconds;
}

let hours = hourTosecond(2);
console.log(hours);