const student = {
    name: 'Mokbul',
    age: 17,
    results:[56,87,68]
}
const stdData = `Name: ${student.name}, AvrgMark: ${((student.results[0] + student.results[1] + student.results[2] ) / student.results.length).toFixed(2)}`;
console.log(stdData);