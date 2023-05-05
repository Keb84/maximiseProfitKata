const lookUpApple = require('./utils');

// go through the stocks
// push the prices to new array based on the stock name
// 

function maximiseProfits(stockPrices) {
    console.log(stockPrices)



    const priceArray = lookUpApple(stockPrices)

    priceArray.reduce((acc, curr) => {
        console.log(acc)
        console.log(curr)
const maxProfit = curr - acc
console.log(Number(maxProfit.toFixed(2)))
    })


}

module.exports = maximiseProfits;