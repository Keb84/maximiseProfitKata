
const lookUpApple = require('./utils')


describe('lookUp', () => {
    test('should take an array of objects and return a filtered array of Prices for Apple', () => {
        const stock = [
            [
              {
                name: "Apple",
                price: 120.25,
              },
            ],
            [
              {
                name: "Apple",
                price: 125.58,
              },
            ]
        ]
        const output = [120.25, 125.58]
        expect(lookUpApple(stock)).toEqual(output)
    })
    

})