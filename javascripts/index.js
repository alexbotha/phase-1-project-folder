// Event listener - DOMContent Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const imageContainer = document.querySelector(".image-container");
  const dogAPI = "https://dog.ceo/api/breeds/image/random/4";
  const pawBtn = document.querySelector(".pawBtn");
  const submitBtn = document.getElementById("submit-section");
  const resetBtn = document.querySelector(".resetBtn");
  const search = document.getElementById("search");
  const errorMessage = document.createElement("h2");
  const errorContainer = document.querySelector(".errorContainer");
  const timeStampContainer = document.querySelector(".timeStamp");

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

  // Random Dog photos being fetched from API
  function getDogs() {
    imageContainer.innerHTML = "";
    fetch(dogAPI)
      .then((res) => res.json())
      .then((data) => renderDogs(data));
  }
  pawBtn.addEventListener("click", getDogs);

  // Random and Specific breed function - DRY
  function renderDogs(data) {
    data.message.forEach((iterateOverDog) => {
      errorContainer.innerText = "";
      errorMessage.innerText = "";
      helper(iterateOverDog);
    });
  }

  // Fetching specific breed from API using event target
  submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    imageContainer.innerHTML = "";
    fetch(
      `https://dog.ceo/api/breed/${e.target[0].value.toLowerCase()}/images/random/4`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          errorContainer.innerText = "";
          errorMessage.innerText = "";
          renderDogs(data);
        } else {
          errorMessage.innerHTML = "Doggo not found. Please try again";
          errorContainer.append(errorMessage);
          const img = document.createElement("img");
          img.src = "images/saddog.jpg";
          imageContainer.append(img);
        }
      });
  });

  // Clearing images after they appear on the DOM via click event
  function reset() {
    imageContainer.innerHTML = "";
    search.value = "";
    errorContainer.innerText = "";
    errorMessage.innerText = "";
  }
  resetBtn.addEventListener("click", reset);

  function mouseOver() {
    resetBtn.innerText = "Are you sure?????";
  }
  resetBtn.addEventListener("mouseover", mouseOver);

  function mouseout() {
    resetBtn.innerText = "Reset";
  }
  resetBtn.addEventListener("mouseout", mouseout);

  // Automatic date counter
  function getTimestampInSeconds() {
    const time = document.createElement("p");
    time.textContent = new Date().toLocaleDateString();
    timeStampContainer.append(time);
  }
  getTimestampInSeconds();
});
