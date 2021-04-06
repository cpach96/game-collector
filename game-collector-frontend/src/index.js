
//tests ---------


const BACKEND_URL = 'http://localhost:3000';
//fetch(`${BACKEND_URL}/test`)
  //.then(response => response.json())
  //.then(parsedResponse => console.log(parsedResponse));

//----------------------

// form data capture

let formData = {
  test: "test",
  testing: "Testing"
}

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};



//-------------------


//fetch requests --------------


//----------------------

//Event Listeners -------------
window.addEventListener("DOMContentLoaded", (event) =>{
  console.log("Dom Ready")
  fetch('http://localhost:3000/games') .then(function(response){
    return response.json();
  }) .then(function(json) {
    console.log(json["data"][0]["attributes"])
    let title = json["data"][0]["attributes"]["title"]
    let description = json["data"][0]["attributes"]["description"]
    let imgUrl = json["data"][0]["attributes"]["imgUrl"]
    let value = json["data"][0]["attributes"]["value"]
    let li = document.createElement("li")
    let collection = document.getElementById("collection")
    li.innerHTML = title
    collection.appendChild(li)

  })
})

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
});

//---------------------------------
// Classes --------------

class Game {
    constructor(title,imageUrl,description,value){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.value = value;
    }
}
