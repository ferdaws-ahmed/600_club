function cmToMetar (cm){
    let metar = cm / 100;
    return metar;
}

let cms = cmToMetar(14550);
console.log(cms);