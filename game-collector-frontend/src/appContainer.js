class AppContainer {
   static games = [];
    genres = [];
    url = "http://localhost:3000"

    addEventListeners(){
        const submitBtn = document.getElementById("submit");
        const generateBtn = document.getElementById("generateBtn")
        submitBtn.addEventListener('click',this.submitGame)
        generateBtn.addEventListener('click', this.generateCollection)
    }

    submitGame(){
        console.log("test")
    }

    generateCollection(){ // generates a random collection and value of games for this instance 
        let randomCollection = []
        for (let i = 0; i < 4 ; i++){
            //make it so it adds a game of each genre 
            debugger
            randomCollection.push(AppContainer.games[Math.floor(Math.random()*AppContainer.games.length)])
        }
        return randomCollection;
    }

    getGames(){
        //make a fetch to /games
        fetch(this.url + '/games')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(game => {
                new Game(game.title, game.img_url, game.description,game.value)
            });
        })
        //populate the games properties and genres with the returned data
        //call renderGames
        .catch(error => alert(error));
    };

    renderGames(){
        //create dom nodes and insert data into them to render into the dom
    };
};

//app container controls the logic of the page 