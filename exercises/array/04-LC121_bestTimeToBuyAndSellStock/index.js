// function maxProfit(prices) {
//   if (prices.length < 2) {
//     return 0; // Not enough days to make a profit
//   }

//   let profit = 0;
//   let buy = prices[0];
//   let sell;
//   let currentProfit;

//   for (let i = 1; i < prices.length; i++) {
//     // move sell pointer
//     if (prices[i] - buy > profit) {
//       profit = prices[i] - buy;
//       sell = prices[i];
//     }

//     // move buy pointer --> also influence sell pointer
//     if (prices[i] < buy && i < prices.length - 1) {
//       buy = prices[i];
//       sell = prices[i + 1];

//       if (sell - buy > profit) {
//         profit = sell - buy;
//       }
//     }
//   }

//   return profit;
// }

// function maxProfit(prices) {
//   // body
//   let buy = prices[0];
//   let sell;
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     // return if length is invalid
//     if (prices.length < 2) {
//       return maxProfit;
//     }

//     // move sell pointer
//     if (prices[i] > buy) {
//       sell = prices[i];

//       // compare profit
//       if (sell - buy > maxProfit) {
//         maxProfit = sell - buy;
//       }
//     }

//     // move buy pointer
//     if (prices[i] < buy && i < prices.length - 1) {
//       buy = prices[i];
//       sell = prices[i + 1];
//     }
//   }

//   return maxProfit;
// }

function maxProfit(prices) {
  // body

  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let todayPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let futurePrice = prices[j];
      if (futurePrice <= todayPrice) {
        continue;
      } else {
        maxProfit = Math.max(futurePrice - todayPrice, maxProfit);
      }
    }
  }

  return maxProfit;
}

maxProfit([7, 6, 4, 3, 1, 10]);
module.exports = maxProfit;
