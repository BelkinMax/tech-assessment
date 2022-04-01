class RouterBuilder {
  constructor() {
    this.nodes = []
  }

  build(categories, node, parentNodePath = "") {
    let currentFolder, currentPath

    for (const { name, subcategories = [] } of categories) {
      currentFolder = `/${name}`
      currentPath = `${parentNodePath}${currentFolder}`

      this.nodes.push(new node().setName(name).setPath(currentPath))
      
      this.build(subcategories, node, currentPath)
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

  getName() {
    return this.name
  }
  getPath() {
    return this.path
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

  getAllNodes() {
    return this.nodes
  }

  getNodesByName(name = "") {
    return this.withFallback(
      this.nodes.filter((node) => node.getName() === name),
      [new this.nodeInstance()]
    )
  }

  getNodesByPath(path = "") {
    return this.withFallback(
      this.nodes.filter((node) => node.getPath() === path),
      [new this.nodeInstance()]
    )
  }

  get isCreated() {
    return !!this.nodes.length
  }
}

module.exports = {
  router: new Router(Node),
}
