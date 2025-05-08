let books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
}

for(let key in books){
    let boom = Object.keys(books);
    console.log(key);
}