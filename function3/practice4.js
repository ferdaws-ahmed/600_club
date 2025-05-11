function checkVote (age){
    if(age > 18){
        let message = "Eligible for Voting";
        return message;
    }
    else{
        let message = "No Eligible";
        return message;
    }
}
let result = checkVote(26);
console.log(result);