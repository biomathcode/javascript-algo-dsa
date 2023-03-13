function makeChange(coins, amount) {
  coins = coins.sort((a, b) => b - a);
  const changeCoins = [];

  if (coins.includes(amount)) {
    const index = coins.findIndex((e) => e === amount);

    changeCoins.push(coins[index]);
  } else {
    amount -= coins[i];
  }

  return changeCoins;
}

console.log(makeChange([15, 10, 5], 10));

// number of coins
// least number of coins that adds up to that sum
// [5, 10, 15]
// 25 => 10 + 15
// 30 => 10 + 15 + 5
//
