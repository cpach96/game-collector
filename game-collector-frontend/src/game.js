class Game {
    constructor(title,img_url,description,value,genre,id){
        this.title = title;
        this.img_url = img_url;
        this.description = description;
        this.value = value; 
        this.genre = genre;
        this.id = id;
        this.element = document.createElement("div");
        this.element.id = `game-${this.id}`
        this.element.addEventListener("click", this.clickHandler)
        AppContainer.games.push(this)
        AppContainer.genres.push(this.genre)
        
    }

    static findById(id){
        return Game.all.find(game => game.id == id)
    }

    addToDom(){
        const h2Title = document.createElement('h2')
        const liImg = document.createElement('IMG')
        const liDesc = document.createElement('li')
        const liVal = document.createElement('li')
        const liGenre = document.createElement('li')
        const deleteButton = document.createElement('button')
        h2Title.innerText = this.title
        liImg.src = this.img_url
        liImg.style.height = '100px'
        liImg.style.width = '100px'
        liDesc.innerText = `Description: ${this.description}`
        liVal.innerText = `Game Value $${this.value}!`
        liGenre.innerText = `Genre: ${this.genre ? this.genre.name : "unknown"}`
        deleteButton.class = "delete"
        deleteButton.id = this.id
        deleteButton.innerText = "Delete Game"
        this.element.appendChild(h2Title)
        this.element.appendChild(liImg)
        this.element.appendChild(liDesc)
        this.element.appendChild(liVal)
        this.element.appendChild(liGenre)
        this.element.appendChild(deleteButton)
        this.addEventListeners()
        AppContainer.gameCollection.appendChild(this.element)

        
        
    }

    get gameCollection(){
        return document.getElementById("new-collection");
    }

    addEventListeners(){
        this.element.addEventListener("click", this.clickHandler)
    }

    clickHandler = (e) => {
        let id = e.target.id
        AppContainer.deleteGame(id)
    }



    
   /// static byGenre(genreName){ not enabled
     //   return AppContainer.games.filter(game => game.genre.name === genreName) 
   // }
    


}