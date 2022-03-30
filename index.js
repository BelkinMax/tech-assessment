const getCategoryPath = (categories, categoryName) => {
  for (const { name, subcategories } of categories) {
    if (name === categoryName) return `/${name}`

    const path = getCategoryPath(subcategories, categoryName)
    if (path) return `/${name}${path}`
  }

  return
}

module.exports = {
  getCategoryPath,
}
