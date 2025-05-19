function countGrade (mark){
    if(mark >= 80){
        return "A";
    }
    else if( mark >= 70){
        return "B";
    }
    else if( mark >= 60){
        return "C";
    }
    else if(mark >= 50){
        return "D";
    }
    else{
        return "F";
    }
}

let marks = countGrade(79);
console.log(marks);