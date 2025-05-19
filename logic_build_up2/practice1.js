function countTax (income){
    if (income > 200000){
        let tax = 40 / 100 * income;
        return tax;
    }
    else if(income > 100000){
        let tax = 30 / 100 * income;
        return tax;
    }
    else if( income > 50000){
        let tax = 20 / 100 * income;
        return tax;
    }
    else{
        let tax = 10 / 100 * income;
        return tax;
    }
}

let incomeAmount = countTax(2000000);
console.log(incomeAmount);