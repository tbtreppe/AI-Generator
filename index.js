function generateAnswer(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: "hello",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateAnswer);
