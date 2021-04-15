class AppContainer {
    static games = [];
    static genres = [];
    url = "http://localhost:3000"
    // static randomCollection = {}

    addEventListeners(){
        const submitBtn = document.getElementById("newGame");
        submitBtn.addEventListener('submit', () => this.submitGame(event)) //possible bug with execution conxtent switiching to window?

        const deleteBtn = document.getElementById("deleteGame")
        deleteBtn.addEventListener('submit', () => this.deleteGame(event))

       // const generateBtn = document.getElementById("generateBtn");
        // generateBtn.addEventListener('click', this.getRandomCollection);

        
        
    };

    submitGame(event) {   //submit new game event
         // event.preventDefault();
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
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    deleteGame(event){
        //event.preventDefault();
        const form = document.getElementById("deleteGame")
        const formData = event.target;
        const id = formData.delete.value
        fetch(`${this.url}/games/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                delete: id
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

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

   


    getGames(){ //fetches /games url to generate games onto dom
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
        .catch(error => alert(error));
    };

    renderGames(){ //appends games to url
        const ul = document.createElement('ul')
        AppContainer.games.forEach(game => {
            const h2Title = document.createElement('h2')
            const liImg = document.createElement('IMG')
            const liDesc = document.createElement('li')
            const liVal = document.createElement('li')
            const li_Id = document.createElement('li')
            h2Title.innerText = game.title
            liImg.src = game.img_url
            liImg.style.height = '100px'
            liImg.style.width = '100px'
            liDesc.innerText = `Description: ${game.description}`
            liVal.innerText = `Game Value $${game.value}!`
            li_Id.innerText = `Ref ID ${game.id}`
            ul.appendChild(h2Title)
            ul.appendChild(liImg)
            ul.appendChild(liDesc)
            ul.appendChild(liVal)
            ul.appendChild(li_Id)
        });
        document.body.appendChild(ul)
    };
};

//app container controls the logic of the page 