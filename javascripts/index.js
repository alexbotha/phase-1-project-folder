//Event listener - DOMContent Loaded 

  
  document.addEventListener('DOMContentLoaded', (event) => { 

    
    const catAPI = "https://dog.ceo/api/breeds/image/random/4"
    const randomCatElement = document.querySelector(".random-cats")
    const goButton = document.querySelector(".go-button")
  
    //Fetch request of dog images from the API
    function getRandomCat(){
      randomCatElement.innerHTML = ""
      fetch(catAPI)
      .then((res) => res.json())
      .then((passJsonData) => renderCatImages(passJsonData))
    }
    
    //Building a function that takes in the argument of passCatAPIData so we can render it onto the DOM
    function renderCatImages(recievesThePassedJsonData){
      
      //Using dot notation to select the json data that has the key of message I use the forEach array method to irate over catImages which contains the API data, in this case, the images
  recievesThePassedJsonData.message.forEach(catImage => {
    
    //Following on from using arrow syntax I have now started to create the structure of the images using columns to contain the API data
    const columnElement = document.createElement("div");
    columnElement.classList.add('column');
    console.log(columnElement)
    

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    columnElement.appendChild(cardElement);
    
    const cardImageElement = document.createElement("div");
    cardImageElement.classList.add("card-image");
    cardElement.appendChild(cardImageElement);
    
    const figureElement = document.createElement("figure");
    figureElement.classList.add('image');
    cardImageElement.appendChild(figureElement)
    
    const imageElement = document.createElement("img")
    imageElement.src = catImage;
    figureElement.appendChild(imageElement);
    
    randomCatElement.appendChild(columnElement);
    
  });
}

//Event Listener - generating dog images 
goButton.addEventListener("click", getRandomCat);
})