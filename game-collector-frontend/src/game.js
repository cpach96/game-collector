class Game {
    constructor(title,img_url,description,value,genre){
        this.title = title;
        this.img_url = img_url;
        this.description = description;
        this.value = value; 
        this.genre = genre
        AppContainer.games.push(this)
        
    }
}