const stocks = [7, 5, 3, 6, 4, 0];

function solution(stocks) {
  let profit = 0;
  let min = stocks[0];

  for (i = 0; i < stocks.length; i++) {
    min = Math.min(min, stocks[i]);
    console.log(min);
    profit = Math.max(profit, stocks[i] - min);
  }
  return profit;
}
console.log(solution(stocks));
