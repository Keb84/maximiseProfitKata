// create a lookUp object to make the company name the value and the price as the key




function lookUpApple(stock) {
 
const flattenStock = stock.flat();

const filteredStock = flattenStock.map((company) => {
    if(company.name === 'Apple') {
        return company.price
    }
})
return filteredStock


}

module.exports = lookUpApple;