let slctMain = document.querySelector('main');
let slctBtn = document.getElementById('btn');
slctBtn.addEventListener('click', addQuote);

async function addQuote (){
try{
    let response = await fetch("https://thatsthespir.it/api");
    let quote = await response.json();
    let addArticle = document.createElement("article");
    addArticle.innerText = quote.quote;
    slctMain.prepend(addArticle);
    displayQuote(addArticle, quote);
}

catch(error) {
    console.log(error);
    };

}


function displayQuote(addArticle, quote) {
let figure = document.createElement("figure");
let blockquote = document.createElement("blockquote");
let h2 = document.createElement("h2");
let p = document.createElement("p");

blockquote.appendChild(h2);
figure.appendChild(blockquote);
blockquote.appendChild(p);
addArticle.appendChild(figure);

}

addQuote()