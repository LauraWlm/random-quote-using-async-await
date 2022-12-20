let slctMain = document.querySelector('main');
let slctBtn = document.getElementById('btn');
slctBtn.addEventListener('click', addQuote);

async function addQuote (){
try{
    const response = await fetch("https://thatsthespir.it/api");
    let quote = response.json;
    let addDiv = document.createElement("div");
    let addArticle = document.createElement("article");
    addDiv.innerHTML = response;
    document.body.appendChild(addDiv);
    document.body.appendChild(addArticle);
        
}

catch(error) {
    console.log(error);
    };

}



