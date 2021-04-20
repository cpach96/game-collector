class Game {
    constructor(title,img_url,description,value,genre,id){
        this.title = title;
        this.img_url = img_url;
        this.description = description;
        this.value = value; 
        this.genre = genre;
        this.id = id;
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
        const liId = document.createElement('li')
        h2Title.innerText = this.title
        liImg.src = this.img_url
        liImg.style.height = '100px'
        liImg.style.width = '100px'
        liDesc.innerText = `Description: ${this.description}`
        liVal.innerText = `Game Value $${this.value}!`
        liGenre.innerText = `Genre: ${this.genre ? this.genre.name : "unknown"}`
        liId.innerText = `Ref ID: ${this.id}`
        AppContainer.gameCollection.appendChild(h2Title)
        AppContainer.gameCollection.appendChild(liImg)
        AppContainer.gameCollection.appendChild(liDesc)
        AppContainer.gameCollection.appendChild(liVal)
        AppContainer.gameCollection.appendChild(liGenre)
        AppContainer.gameCollection.appendChild(liId)
    }

    
   /// static byGenre(genreName){ not enabled
     //   return AppContainer.games.filter(game => game.genre.name === genreName) 
   // }
    


}