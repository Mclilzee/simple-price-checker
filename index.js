const form = document.querySelector("form");
const result = document.querySelector(".result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const weight = event.target[0].value;
  const price = event.target[1].value;
  
  event.target[1].blur();
  result.textContent = (price / weight) * 1000;
})
