// Thank to jonathan M pour l'aide

//initialise en cherchant le main et btn 
let slctMain = document.querySelector('main');
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
    addArticle.innerText = quote.quote + " " + quote.author  // add inner text quote.quote récupère l'infi dans l'objet, si juste quote me met en rep sur internet :[objet objet]
    slctMain.prepend(addArticle);
    displayQuote(addArticle, quote);
}

catch(error) {
    console.log(error);
    };

}

// créa° affichage quote
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
