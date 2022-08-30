/////////////////////GLOBAL VARIABLES////////////////////////

const imageContainer = document.querySelector(".image-container");
const dogAPI = "https://dog.ceo/api/breeds/image/random/4";
const pawBtn = document.querySelector(".pawBtn");
const submitBtn = document.getElementById("submit-section");

/////////////////Event listener - DOMContent Loaded/////////////

document.addEventListener("DOMContentLoaded", () => {
  /////////////////RANDOM DOG PHOTO FROM API//////////////

  function getRandomDog() {
    imageContainer.innerHTML = "";
    fetch(dogAPI)
      .then((res) => res.json())
      .then((passJsonData) => renderDogImages(passJsonData));
  }

  function renderDogImages(recievesThePassedJsonData) {
    recievesThePassedJsonData.message.forEach((iterateOverDogImageObjects) => {
      const columnElement = document.createElement("div");
      columnElement.classList.add("column");

      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      columnElement.appendChild(cardElement);

      const cardImageElement = document.createElement("div");
      cardImageElement.classList.add("card-image");
      cardElement.appendChild(cardImageElement);

      const figureImgElement = document.createElement("figure");
      figureImgElement.classList.add("figure");
      cardImageElement.appendChild(figureImgElement);

      const imageLink = document.createElement("img");
      imageLink.classList.add("imageLink");
      imageLink.src = iterateOverDogImageObjects;
      figureImgElement.appendChild(imageLink);

      imageContainer.appendChild(columnElement);
    });
  }

  pawBtn.addEventListener("click", getRandomDog);

  //////////////////////BREED LIST FROM API ///////////////////

  submitBtn.addEventListener("submit", (e) => {
    imageContainer.innerHTML = "";
    e.preventDefault();
    fetch(
      `https://dog.ceo/api/breed/${e.target[0].value.toLowerCase()}/images/random/4`
    )
      .then((res) => res.json())
      .then((passData) => renderBreedImages(passData));

    function renderBreedImages(getsData) {
      getsData.message.forEach((dogBreedImage) => {
        const columnElement = document.createElement("div");
        columnElement.classList.add("column");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        columnElement.appendChild(cardElement);

        const cardImageElement = document.createElement("div");
        cardImageElement.classList.add("card-image");
        cardElement.appendChild(cardImageElement);

        const figureImgElement = document.createElement("figure");
        figureImgElement.classList.add("figure");
        cardImageElement.appendChild(figureImgElement);

        const imageLink = document.createElement("img");
        imageLink.classList.add("imageLink");
        imageLink.src = dogBreedImage;
        figureImgElement.appendChild(imageLink);

        imageContainer.appendChild(columnElement);
      });
    }
  });
});
