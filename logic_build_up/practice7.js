function gozToMetar (goz){
    let metars = goz * 0.91;
    return metars;
}

let gozs = gozToMetar(20);
console.log(gozs);