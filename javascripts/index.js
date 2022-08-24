const mainDiv = () => document.getElementById("main")

document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  fetchDogData();
  
  //Event listeners
  function fetchDogData(){
  const dogImageUrl = "https://dog.ceo/api/breeds/image/random"
  fetch(dogImageUrl)
  .then(res => res.json())
  .then(data => console.log(data))
}

//Event Handlers
function renderHomePage(){
  resetMainDiv();

  const h1 = document.createElement("h1")
  const p = document.createElement("p")

  h1.innerText = "emoji"
  h1.style.marginTop = "0"
  p.innerText = "Welcome to random dogs! Click the button below to see a photo of a good doggo"

  mainDiv().appendChild(h1);
  mainDiv().appendChild(p);
}

//Helpers
function resetMainDiv(){
  mainDiv().innerHTML = ""
}

})