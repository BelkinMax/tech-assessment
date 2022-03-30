const { getCategoryPath } = require("./index.js")

describe("Index has to", () => {
  const categories = [
    {
      name: "category1",
      subcategories: [
        {
          name: "category2",
          subcategories: [],
        },
        {
          name: "category3",
          subcategories: [
            {
              name: "category4",
              subcategories: [],
            },
          ],
        },
      ],
    },
    {
      name: "category5",
      subcategories: [],
    },
  ]

  it("get category4 path", () => {
    const expected = "/category1/category3/category4"
    const received = getCategoryPath(categories, "category4")

    expect(received).toBe(expected)
  })
  it("get category2 path", () => {
    const expected = "/category1/category2"
    const received = getCategoryPath(categories, "category2")

    expect(received).toBe(expected)
  })
  it("get category5 path", () => {
    const expected = "/category5"
    const received = getCategoryPath(categories, "/category5")

    expect(received).toBe(expected)
  })
})
