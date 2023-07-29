function convertCurrency(amount, exchangeRate, currencyName) {
    if (amount <= 0 || exchangeRate <= 0) {
      return 'Enter valid data';
    }
  
    const result = (amount * exchangeRate);
    const formattedResult = Number.isInteger(result) ? result.toString() : result.toFixed(2);
  
    return `Give them ${formattedResult} ${currencyName}('s)`;
  }
  
  