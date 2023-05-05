const maximiseProfits  = require("./index");




describe("maximiseProfits", () => {
  test("should return an object when passed an array", () => {
    expect(maximiseProfits([])).toBeInstanceOf(Object);
  })
  test.only('should return an object with a name and maxProfit key', () => {
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
    const output = {
        name : "Apple",
        maxProfit : 5.33
    }
    expect(maximiseProfits(stock)).toEqual(output);
})
test("should return the max profit when three days of information for the same company is passed", () => {
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
      ],
      [
        {
          name: "Apple",
          price: 130.68,
        },
      ],
    ];
    expect(maximiseProfits(stock)).toEqual({ name: "Apple", maxProfit: 10.43 });
  })
  test("should return the max profit for the same company when multiple companies are passed", () => {
    const stock = [
      [
        {
          name: "Apple",
          price: 120.25,
        },
        {
          name: "Microsoft",
          price: 240.5,
        },
      ],
      [
        {
          name: "Apple",
          price: 125.58,
        },
        {
          name: "Microsoft",
          price: 248.72,
        },
      ],
    ];
    expect(maximiseProfits(stock)).toEqual({
      name: "Microsoft",
      maxProfit: 8.22,
    });
  });














});