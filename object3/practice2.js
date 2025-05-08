let article = {
    title: "Learning JS",
    category:"Programming"
};

let articleKyes = Object.keys(article);
let hasArticle = articleKyes.includes('author');
console.log(hasArticle);