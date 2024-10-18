
let resultsDiv = document.getElementById('results');

function getHeroes() {

    let heroId = document.getElementById('heroNum').value;
    console.log(heroId);

    fetch(`http://akabab.github.io/superhero-api/api/id/${heroId}.json`)
        .then(function (serverResponse) {
            return serverResponse.json();
        })
        .then(function (heroData) {
            console.log(heroData);


            resultsDiv.innerHTML = `
            <p>name = ${heroData.name} </p>
            <img src="${heroData.images.sm}">
            `;


        })
        .catch(function (err) {
            console.log("❌❌❌❌", err);
        });
}