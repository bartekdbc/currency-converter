let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.7804;
let USD = 4.9;
let CHF = 4.852;
let GBP = 5.4537;
let HKD = 0.6242;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  switch (currency) {
    case "EUR":
      result = amount / EUR;
      break;

    case "USD":
      result = amount / USD;
      break;

    case "CHF":
      result = amount / CHF;
      break;

    case "GBP":
      result = amount / GBP;
      break;

    case "HKD":
      result = amount / HKD;
      break;
  }
  resultElement.innerText = `💸${amount.toFixed(2)} PLN = ${result.toFixed(
    2
  )} ${currency}💸`;
});
