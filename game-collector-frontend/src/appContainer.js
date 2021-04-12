class AppContainer {
   static games = [];
    static genres = [];
    url = "http://localhost:3000"
    static randomCollection = {}

    addEventListeners(){
        const submitBtn = document.getElementById("newGame");
        const generateBtn = document.getElementById("generateBtn");
        submitBtn.addEventListener('submit',() => this.submitGame(event));
        generateBtn.addEventListener('click', this.getRandomCollection);
    }

    submitGame(event){
        event.preventDefault();
        console.log(this)
    }

    submitCollection(){
        this.getRandomCollection();
    }

    getRandomCollection(){ // generates a random collection and value of games for this instance 
        let randomCollection = []
        for (let i = 0; i < 4 ; i++){
            randomCollection.push(AppContainer.games[Math.floor(Math.random()*AppContainer.games.length)])
        };

         new GameCollection(randomCollection)
         const newRandomCollection = document.getElementById('collection')
         AppContainer.randomCollection.games.forEach(game => {
             const gameDiv = document.createElement('div');
             gameDiv.innerText = game.title
             newRandomCollection.appendChild(gameDiv)
         })
         //delete works but is broken
            fetch(`http://localhost:3000/games/${randomCollection[0].id}`,{
                method: 'DELETE',
        })  
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => alert(err))
     }

    getGames(){
        //make a fetch to /games
        fetch(this.url + '/games')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(game => {
                new Game(game.title, game.img_url, game.description,game.value, game.genre,game.id)
                
            });
            this.renderGames();
            console.log(AppContainer.games)
        })
        //populate the games properties and genres with the returned data
        //call renderGames
        .catch(error => alert(error));
    };

    renderGames(){
        const ul = document.createElement('ul')
        AppContainer.games.forEach(game => {
            const h2Title = document.createElement('h2')
            const liImg = document.createElement('IMG')
            const liDesc = document.createElement('li')
            const liVal = document.createElement('li')
            h2Title.innerText = game.title
            liImg.src = game.img_url
            liImg.style.height = '100px'
            liImg.style.width = '100px'
            liDesc.innerText = game.description
            liVal.innerText = `Game Value $${game.value}!`
            ul.appendChild(h2Title)
            ul.appendChild(liImg)
            ul.appendChild(liDesc)
            ul.appendChild(liVal)
        });
        document.body.appendChild(ul)
        //create dom nodes and insert data into them to render into the dom
    };
};

//app container controls the logic of the page 