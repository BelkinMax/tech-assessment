const { router } = require("./index.js")

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

  const categoriesRouter = router.init(categories)

  it("get category4 path", () => {
    const EXPECTED = "/category1/category3/category4"
    const filteredNodes = categoriesRouter.getNodesByName("category4")
    const [ receivedNode ] = filteredNodes

    expect(filteredNodes.length).toBe(1)
    expect(receivedNode.path).toBe(EXPECTED)
  })

  it("get category2 path", () => {
    const EXPECTED = "/category1/category2"
    const filteredNodes = categoriesRouter.getNodesByName("category2")
    const [ receivedNode ] = filteredNodes

    expect(filteredNodes.length).toBe(1)
    expect(receivedNode.path).toBe(EXPECTED)
  })

  it("get category5 path", () => {
    const EXPECTED = "/category5"
    const filteredNodes = categoriesRouter.getNodesByName("category5")
    const [ receivedNode ] = filteredNodes

    expect(filteredNodes.length).toBe(1)
    expect(receivedNode.path).toBe(EXPECTED)
  })

  it("get undefined if the category does not exists", () => {
    const EXPECTED = undefined
    const filteredNodes = categoriesRouter.getNodesByName("category6")
    const [ receivedNode ] = filteredNodes

    expect(filteredNodes.length).toBe(1)
    expect(receivedNode.isEmpty()).toBe(true)
    expect(receivedNode.path).toBe(EXPECTED)
  })
})
