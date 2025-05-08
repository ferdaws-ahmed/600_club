let book = {
    tile: "Harry Potter",
    author: "JK Rowling",
    pages:500
}
Object.seal(book);
book.author = "JK Rowling choto vai";
console.log(book);