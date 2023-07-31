function calcCurrency() {
    const apiKey = "edae4b4cddb443018b902ff846e3b5c0";
    const currencies = ["EGP", "SAR", "EUR", "JPY", "GBP", "AUD", "BRL", "RUB", "AED", "KWD"];
    const amount = document.getElementById("amount");
    fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`).then(
        (result) => result.json()
    ).then((data) => {
        currencies.forEach(curr => {
            const rate = data.rates[curr];
            let currDiv = document.querySelector(`.${curr.toLocaleLowerCase()}`);
            currDiv.style.borderBottom = "1px solid #ccc";
            currDiv.style.paddingBottom  = "5px";
            const countryCurr = document.querySelector(`.${curr.toLowerCase()} span`);
            document.querySelector("#btn").addEventListener("click", () => {
                countryCurr.textContent = `${(amount.value * rate).toFixed(2)} (${curr})`;
            });
        })
    })
}
calcCurrency();