//Event listener - DOMContent Loaded 
  document.addEventListener('DOMContentLoaded', () => { 

/////////////////////////RANDOM DOG PHOTO FROM API///////////////////////////////////

    const randomDogElement = document.querySelector(".random-dog")
    const dogAPI = "https://dog.ceo/api/breeds/image/random/4"
    const pawBtn = document.querySelector(".pawBtn")    

    function getRandomDog(){
      randomDogElement.innerHTML = ""
       fetch(dogAPI)
      .then((res) => res.json())
      .then((passJsonData) => renderDogImages(passJsonData))
    }
   
    function renderDogImages(recievesThePassedJsonData) {
    recievesThePassedJsonData.message.forEach(iterateOverDogImageObjects => {    
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
    imageLink.src = iterateOverDogImageObjects;
    figureImgElement.appendChild(imageLink);

    randomDogElement.appendChild(columnElement);
  });  
}

//////////////////////BREED LIST FROM API /////////////////////////////////////////

let breeds = []
  
  function getBreedNames() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl)
      .then(res => res.json())
      .then(res => {
        breeds = Object.keys(res.message)
        addBreedNamesToDom(breeds)
        })
      }
      
    getBreedNames()
    
    function addBreedNamesToDom(breeds){
      const ul = document.querySelector("#dog-breeds")
        breeds.map(breed => {
          const li = document.createElement("li")
          li.textContent = breed
          ul.append(li)
        })
    }

//Adding an event listener onto the paw button to generate images upon click. I pass getRandom dog but don't invoke it as I only want it to appear on the page when it has been clicked 
pawBtn.addEventListener("click", getRandomDog);

});

