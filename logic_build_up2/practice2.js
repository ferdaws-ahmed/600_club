function countDeliveryCharge (kg){
    
    if(kg < 10){
        return 100;
    } 
    
    else if( kg < 20){
        return 300;
    }

    else if(kg < 50){
        return 1000;
    }
    
    
    
     else if ( kg > 50){
        let charge = kg * 100;
        return charge;
    }
}

let kgs = countDeliveryCharge(60);
console.log(kgs);