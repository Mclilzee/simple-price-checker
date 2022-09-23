const form = document.querySelector("form");
const resultInKg = document.querySelector(".result.kg");
const resultInHundretGrams = document.querySelector(".result.hundret-g");
const resultInGrams = document.querySelector(".result.g");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const weight = event.target[0].value;
  const price = event.target[1].value;
  const pricePerGram = price / weight;
  resultInKg.textContent = (pricePerGram * 1000).toFixed(2);
  resultInHundretGrams.textContent = (pricePerGram * 100).toFixed(2);
  resultInGrams.textContent = pricePerGram;

  event.target[1].blur();
})
