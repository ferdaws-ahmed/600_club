let price = 4500;
if( price > 6000){
      let discount = price / 100 * 15;
      let pay = price - discount;
      console.log(pay);
}
else if( price > 3000){
    let discount = price / 100 * 5;
    let pay = price - discount;
    console.log(pay);
}
else{
    console.log(price);
}