class Game {
    constructor(title,img_url,description,value){
        this.title = title;
        this.img_url = img_url;
        this.description = description;
        this.value = value; 
        AppContainer.games.push(this)
        
    }
}