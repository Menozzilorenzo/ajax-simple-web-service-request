let req = new XMLHttpRequest();
req.addEventListener("error", function(){
    window.alert("Erreur la requête n'a pas été aboutie.")
}, false);
req.open("get", "https://thatsthespir.it/api", true);
req.send();
req.onload = function(){
    let data = req.response;
    data = JSON.parse(data);
    console.table(data);

    let citation = document.querySelector("#quote");
    citation.innerHTML = `"${data.quote}"`;
    let auteur = document.querySelector("#author");
    auteur.innerHTML = `- ${data.author}`;
    let image = document.querySelector("img");
    image.src = data.photo;

};