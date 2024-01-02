function displayAnswer(response) {
  new Typewriter("#content", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateAnswer(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "babba12d05727fe813b5e3b80fo05ta4";
  let prompt = `Generate a short recipe based on ${instructionsInput.value}`;
  let context =
    "You are a chef and like to create short recipes in basic HTML and seperate each line with a </br>. Please follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let contentElement = document.querySelector("#content");
  contentElement.classList.remove("hidden");
  contentElement.innerHTML = `<div class = "generating">Generating a recipe about ${instructionsInput.value}`;

  axios.get(apiUrl).then(displayAnswer);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateAnswer);
