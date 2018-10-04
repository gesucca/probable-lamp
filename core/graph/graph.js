var Vertex = require('./vertex')
var Edge = require('./edge')

var NO_VERTEX_ERROR = 'Trying to add an edge between inexistent vertexes!'

class Graph {
  constructor () {
    this.adjacencyList = new Map()
    this.vertexNum = 0
  }

  addVertex (word) {
    var vertex = this.findVertex(word)

    if (vertex == null) {
      vertex = new Vertex(word)
      this.adjacencyList.set(vertex, [])
      this.vertexNum++
    } else {
      vertex.incrementWeigth()
    }
  }

  addEdge (word1, word2, mod) {
    let sourceVertex = this.findVertex(word1)
    let destVertex = this.findVertex(word2)
    if (sourceVertex === null || destVertex === null) {
      throw NO_VERTEX_ERROR
    }

    let edge = this.findEdge(word1, word2, mod)
    if (edge === null) {
      edge = new Edge(destVertex, mod)
      this.adjacencyList.get(sourceVertex).push(edge)
    } else {
      edge.increaseAttractiveness()
    }
  }

  // returns null if not found
  findEdge (word1, word2, mod) {
    let vertex1 = this.findVertex(word1)
    if (vertex1 === null) {
      return null
    }

    let vertex2 = this.findVertex(word2)
    if (vertex2 === null) {
      return null
    }

    let edge = null
    for (let e of this.adjacencyList.get(vertex1)) {
      if (e.destination === vertex2 && e.mod === mod) {
        edge = e
        break
      }
    }
    return edge
  }

  // returns null if not found
  findVertex (word) {
    let vertex = null
    for (let v of this.adjacencyList.keys()) {
      if (v.word === word) {
        vertex = v
        break
      }
    }
    return vertex
  }

  /*
  _addNode (node) {
    let oldNode = null

    this.nodes.forEach(alreadyPresentNode => {
      if (alreadyPresentNode.word === node.word) {
        oldNode = alreadyPresentNode
      }
    })

    if (oldNode == null) {
      this.nodes.push(node)
    } else {
      oldNode.incrementWeigth()
    }
  }

  _addArc (arc) {
    this.arcs.push(arc)
    console.log(arc)
  } */
}

module.exports = Graph
