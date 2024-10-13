document.getElementById('convertButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    // Курсы обмена (для примера)
    const rates = {
        BTC: 1,
        ETH: 15,
        USDT: 27000
    };

    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];

    document.getElementById('result').querySelector('span').textContent = convertedAmount.toFixed(2);
});
