class RouterBuilder {
  constructor() {
    this.nodes = []
  }

  build(categories, nodeInstance, parentNodePath = "") {
    let currentFolder, currentPath

    for (const { name, subcategories = [] } of categories) {
      currentFolder = `/${name}`
      currentPath = `${parentNodePath}${currentFolder}`

      this.nodes.push(new nodeInstance().setName(name).setPath(currentPath))

      this.build(subcategories, nodeInstance, currentPath)
    }

    return
  }

  withFallback(res, fallback) {
    return res.length ? res : fallback
  }
}

class Node {
  name
  path

  constructor() {}

  setName(name) {
    this.name = name
    return this
  }
  setPath(path) {
    this.path = path
    return this
  }

  isEmpty() {
    return !this.name
  }
}

class Router extends RouterBuilder {
  constructor(nodeInstance) {
    super()
    this.nodeInstance = nodeInstance
  }

  init(three) {
    if (this.isCreated) return
    this.build(three, this.nodeInstance)
    return this
  }

  get isCreated() {
    return !!this.nodes.length
  }

  getAllNodes() {
    return this.nodes
  }

  getNodesByName(name = "") {
    return this.withFallback(
      this.nodes.filter((node) => node.name === name),
      [new this.nodeInstance()]
    )
  }
}

module.exports = {
  router: new Router(Node),
}
