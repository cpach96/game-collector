class AppContainer {
    static games = [];
    static genres = [];
    static gameCollection = document.getElementById("new-collection");
     url = "http://localhost:3000"
    // static randomCollection = {}

    addEventListeners(){
        const submitBtn = document.getElementById("newGame");
        submitBtn.addEventListener('submit', () => this.submitGame(event)) //possible bug with execution conxtent switiching to window?

        const deleteBtn = document.getElementById("deleteGame")
        deleteBtn.addEventListener('submit', () => this.deleteGame(event))

        const sortRts = document.getElementById("rts") //find all games at are rts genre
        sortRts.addEventListener('click', () => this.sortGames());
    };

   // removeGame(){
    // bug bug bug
    // }

    submitGame(event) {   //submit new game event
        event.preventDefault(); 
        const form = document.getElementById("newGame")
        const formData = event.target;
        fetch(`${this.url}/games`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: formData.title.value,
                img_url: formData.imgUrl.value,
                description: formData.description.value,
                value: formData.value.value,
                genre: formData.genre.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
           const newGame = new Game(data.title, data.img_url, data.description,data.value, data.genre,data.id)
            newGame.addToDom();
            this.getTotalValue();
        })
        .catch(err => console.log(err));

    }

    static deleteGame(id){
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch(`http://localhost:3000/games/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })

        AppContainer.games = AppContainer.games.filter(i => i.id != id)

        let game = document.getElementById(`game-${id}`)
        game.remove()

    }

    sortGames(){
        AppContainer.games.forEach(game => {
            const list = document.getElementById('sortList')
            const h2Title = document.createElement('h2')
            const liImg = document.createElement('IMG')
            const liDesc = document.createElement('li')
            const liVal = document.createElement('li')
            const liGenre = document.createElement('li')
            if(game.genre.name === "RTS"){
            h2Title.innerText = game.title
            liImg.src = game.img_url
            liImg.style.height = '100px'
            liImg.style.width = '100px'
            liDesc.innerText = `Description: ${game.description}`
            liVal.innerText = `Game Value $${game.value}!`
            liGenre.innerText = `Genre: ${game.genre.name}`
            list.appendChild(h2Title)
            list.appendChild(liImg)
            list.appendChild(liDesc)
            list.appendChild(liVal)
            list.appendChild(liGenre)
            }else{

            }

        });
    }

   // getRandomCollection(){  stretch feature come back later
    //    let randomCollection = [] 
      //  for (let i = 0; i < 4 ; i++){
             //randomCollection.push(AppContainer.games[Math.floor(Math.random()*AppContainer.games.length)])
        // };

         // new GameCollection(randomCollection)
        // const newRandomCollection = document.getElementById('collection')
         // AppContainer.randomCollection.games.forEach(game => {
            // const gameDiv = document.createElement('div');
            // gameDiv.innerText = game.title
            // newRandomCollection.appendChild(gameDiv)
        // })
          
    // }

    getTotalValue(){
        const total = document.getElementById("totalValue")
        total.innerText = "Total Database Collection Value $" + AppContainer.games.reduce(function (acc, obj) {return acc + obj.value;}, 0);
    }

   


    getGames(){ //fetches /games url to generate games onto dom
        fetch(this.url + '/games')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(game => {
                new Game(game.title, game.img_url, game.description,game.value, game.genre,game.id)
                
            });
            this.renderGames();
        })
        
        .catch(error => alert(error));
    };

    renderGames(){ //appends games to url
        AppContainer.games.forEach(game => {
           game.addToDom();
        });
        this.getTotalValue()
    };

};

//app container controls the logic of the page 