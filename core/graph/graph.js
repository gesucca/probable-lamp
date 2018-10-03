class Graph {
  constructor () {
    this.nodes = []
    this.arcs = []
  }

  addVertex (node, arcs) {
    this.nodes.push(node)
    arcs.forEach(arc => {
      this.arcs.push(arc)
    })
    // TODO: test for weigth
  }
}

module.exports = Graph
