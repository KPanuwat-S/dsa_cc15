function maxProfit(prices) {
  let profit = 0;
  let buy = prices[0];
  let sell;
  let currentProfit;

  for (let i = 1; i < prices.length; i++) {
    // move buy pointer --> also influence sell pointer
    if (prices[i] < buy && i !== prices.length) {
      buy = prices[i];
      sell = prices[i + 1];
      if (sell - buy > profit) {
        profit = sell - buy;
      }
    }

    // move sell pointer
    if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
      sell = prices[i];
    }
  }

  return profit;
}

module.exports = maxProfit;
