const createURL = "https://api.rawg.io/api/games";

fetch("https://api.rawg.io/api/games")
    .then(function(response) {
        return response.json();
    })

    .then(function(json) {
        createGames(json);
    })

    .catch(function(error) {
        console.log(error);
    });
      

      function createGames(json) {
        console.log(json);
    
        const results = json.results;
    
        const container = document.querySelector(".results");
    
        let html = "";
    
        for(let i = 0; i < results.length; i++) {
            html += `<div class="game">
                        <h2>${results[i].name}</h2>
                        <img src="${results[i].background_image}" alt="${results[i].name}">
                    </div>`;
        }
    
        container.innerHTML = html;
    
    }

      

     
      