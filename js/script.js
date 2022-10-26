{
  const calculateResult = (amount, currency) => {
    const EUR = 4.7804;
    const USD = 4.9;
    const CHF = 4.852;
    const GBP = 5.4537;
    const HKD = 0.6242;

    switch (currency) {
      case "EUR":
        return amount / EUR;

      case "USD":
        return amount / USD;

      case "CHF":
        return amount / CHF;

      case "GBP":
        return amount / GBP;

      case "HKD":
        return amount / HKD;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `💸${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}💸`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
