# Alten technical assessment

#### Input data
```
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
```

#### TO-DO: Implement this function
```
const getCategoryPath = (categories, categoryName) => {
  // Your code here
};
```

#### OUTPUT SAMPLES
- getCategoryPath(categories, 'category4') should output: '/category1/category3/category4'
- getCategoryPath(categories, 'category2') should output: '/category1/category2'
- getCategoryPath(categories, 'category5') should output: '/category5'
