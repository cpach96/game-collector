class Game {
    constructor(title,img_url,description,value,genre,id){
        this.title = title;
        this.img_url = img_url;
        this.description = description;
        this.value = value; 
        this.genre = genre;
        this.id = id;
        AppContainer.games.push(this)
        
    }
    static byGenre(genreName){
        return AppContainer.games.filter(game => game.genre.name === genreName)
    }
}