const DOMSelectors = {
  cardContainer: document.getElementById("container-box"),
  input: document.getElementById("card-Creator"),
  form: document.querySelector("form"),
};
let cardsArray = [];
function makeCard() {
  let input = DOMSelectors.input.value;
  if (input === "") return;
  let card = {
    title: input,
    id: `card-${cardsArray.length - 1}`,
  };
  cardsArray.push(card);
  injectCardIntoDOM(card);
  clearInput();
  cardRemoval(card.id);
}
function injectCardIntoDOM(card) {  
  DOMSelectors.cardContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="${card.id}">
      <p>${card.title}</p>
      <button class="remove-btn">Remove</button>
    </div>`
  );
}
function clearInput() {
  DOMSelectors.form.reset();
}
function cardRemoval(cardId) {
  const card = document.getElementById(cardId);
  const removeBtn = card.querySelector(".remove-btn");
  removeBtn.addEventListener("click", function () {
    card.remove();
  });
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  makeCard();
});
