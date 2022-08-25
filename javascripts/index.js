//Event listener - DOMContent Loaded 
  document.addEventListener('DOMContentLoaded', (event) => { 

    const randomDogElement = document.querySelector(".random-dog")
    const dogAPI = "https://dog.ceo/api/breeds/image/random/4"
    
    
    const pawBtn = document.querySelector(".pawBtn")
    
    const listBreeds = "https://dog.ceo/api/breeds/list/all"
  
//Fetch request of dog images from the API
    function getRandomDog(){
      randomDogElement.innerHTML = ""
      fetch(dogAPI)
      .then((res) => res.json())
      .then((passJsonData) => renderDogImages(passJsonData))
    }
    console.log(getRandomDog)
    console.log(randomDogElement)
    console.log(dogAPI)
    
    function renderDogImages(recievesThePassedJsonData){
      
    recievesThePassedJsonData.message.forEach(iteratedDogImage => {    
    const columnElement = document.createElement("div");
    columnElement.classList.add('column');
        
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    columnElement.appendChild(cardElement);
        
    const cardImageElement = document.createElement("div");
    cardImageElement.classList.add("card-image");
    cardElement.appendChild(cardImageElement);
    
    const figureImgElement = document.createElement("figure");
    figureImgElement.classList.add("figure");
    cardImageElement.appendChild(figureImgElement)
    
    const imageLink = document.createElement("img")
    imageLink.classList.add("imageLink")
    imageLink.src = iteratedDogImage;
    figureImgElement.appendChild(imageLink);
    
//append the dynamic img dog containers to the column element
    randomDogElement.appendChild(columnElement);
  });
}

//Event Listener - generating dog images 
    pawBtn.addEventListener("click", getRandomDog);

})