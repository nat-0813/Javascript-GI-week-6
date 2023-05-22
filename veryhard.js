function coinChange(coins, amount) { // pass an array of coin denominations and target amount
    const dp = new Array(amount + 1).fill(Infinity);// can create an array with certain length and fill it with the infinite value
    dp[0] = 0; // function will return fewest number of coins needed to make up large amount
  // if target amount cant be made up by any combo of coins, returns -1
    for (let i = 1; i <= amount; i++) { //outer loop iterates over each amount from 1 to amount.  uses the variable i as the current amount being considered
      for (const coin of coins) { //inner loop iterates over each coin denomination in the coins array. variable coin = the current coin denomination being considered
        if (coin <= i) {//if statement checks if the current coin denomination (coin) is less than or equal to the current amount (i). If it is, it means the current coin can be used to make up the current amount
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);//if statement, the dp[i] value is updated. uses Math.min to compare the current value of dp[i] (which represents the minimum number of coins found so far for amount i) with the value of dp[i - coin] + 1 (which represents the minimum number of coins needed to make up the remaining amount after subtracting the current coin denomination)
        }// Math.min is assigned back to dp[i], ensuring that dp[i] always holds the minimum number of coins found so far for amount i
      }
    }
  //If it is still Infinity, it means that no combination of coins was found to make up the target amount. In that case, the function returns -1. if not it returns dp[amount], represents the fewest number of coins needed to make up the target amount
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  //coin denominations
  const coins = [1, 2, 5];
  const amount = 11;//target amount
  const result = coinChange(coins, amount);
  console.log(result);  
  
  //very hard question, had to look up resources to get it but still dont understand and need to go back to it