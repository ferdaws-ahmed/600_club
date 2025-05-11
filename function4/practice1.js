
function checkEvenOrOdd(numbers){
    let EvenNumber = [];
    let OddNumber = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            EvenNumber.push(numbers[i]);
            
        }
        else{
            OddNumber.push(numbers[i]);
        }
        
    }
    console.log("Even = " + EvenNumber);
    console.log("Odd = " + OddNumber);
    
}

let numbers = [12,14,15,19,20];
checkEvenOrOdd(numbers);
