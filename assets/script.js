// Thank to jonathan M pour l'aide

//initialise en cherchant le main et btn 
let main = document.querySelector('main');
let slctBtn = document.getElementById('btn');
slctBtn.addEventListener('click', addQuote);

//crée la fonction asyn pour ajouter les quotes
async function addQuote (){
    //try and catch 
try{
    //variable plus fetch avec lien url et await 
    let response = await fetch("https://thatsthespir.it/api");
    let quote = await response.json(); // await plus .json() après response pour préciser que je prend les infos
    let addArticle = document.createElement("article"); // créa° de l'article qui va contenir les quotes
    main.prepend(addArticle);
    displayQuote(addArticle, quote);
}

catch(error) {
    console.log(error);
    };

}

// créa° affichage quote
function displayQuote(addArticle, quote) { 
let figure = document.createElement("figure");
//let img = document.createElement("image");
//img.setAttribute('src', );
let blockquote = document.createElement("blockquote");
blockquote.setAttribute("cite", "https://thatsthespir.it/")
let h2 = document.createElement("h2");
let q = document.createElement("q");

q.innerText = quote.quote;
h2.innerText = quote.author;
//addArticle.innerHtml = quote.photo



blockquote.appendChild(h2);
figure.appendChild(blockquote);
blockquote.appendChild(q);
addArticle.appendChild(figure);


}

addQuote()
