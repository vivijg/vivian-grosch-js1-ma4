
fetch("https://api.rawg.io/api/games/4200")
 
.then(function(response) {
    return response.json();
})

.then(function(json) {
    createGamesDetails(json);
})

.catch(function() {
    document.location.href = "error.html";
});


function createGamesDetails(json) {
console.dir(json);

const name = document.querySelector("h1");
name.innerHTML = json.name;

// Didn't manage to get the image up
//image.style.backgroundImage = url("${json.background_image}");

const description = document.querySelector(".description");
description.innerHTML = json.description;
}

