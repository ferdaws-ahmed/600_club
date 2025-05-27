const programmer = {name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React"};
const {language, specialty, ...details} = programmer;
console.log(details);