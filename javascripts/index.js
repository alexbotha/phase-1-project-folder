// Event listener - DOMContent Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const imageContainer = document.querySelector(".image-container");
  const dogAPI = "https://dog.ceo/api/breeds/image/random/4";
  const pawBtn = document.querySelector(".pawBtn");
  const submitBtn = document.getElementById("submit-section");

  // Helper function - DRY
  function helper(dogImage) {
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
    imageLink.src = dogImage;
    figureImgElement.appendChild(imageLink);

    imageContainer.appendChild(columnElement);
  }

  // Random Dog photo being fetched from API
  function getRandomDog() {
    imageContainer.innerHTML = "";
    fetch(dogAPI)
      .then((res) => res.json())
      .then((passJsonData) => renderDogImages(passJsonData));
  }

  function renderDogImages(recievesThePassedJsonData) {
    recievesThePassedJsonData.message.forEach((iterateOverDogImageObjects) => {
      helper(iterateOverDogImageObjects);
    });
  }
  pawBtn.addEventListener("click", getRandomDog);

  // Fetching specific breed from API using event target
  submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    imageContainer.innerHTML = "";
    fetch(
      `https://dog.ceo/api/breed/${e.target[0].value.toLowerCase()}/images/random/4`
    )
      .then((res) => res.json())
      .then((passData) => renderBreedImages(passData));

    function renderBreedImages(getsData) {
      getsData.message.forEach((dogBreedImage) => {
        helper(dogBreedImage);
      });
    }
  });
});
