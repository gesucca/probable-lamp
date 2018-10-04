var should = require('chai').should()
var Graph = require('../core/graph/graph')

function addVertexTest () {
    var graph = new Graph()
    graph.addVertex('ciao')
    graph.vertexNum.should.equal(1)
    graph.adjacencyList.size.should.equal(1)

    graph.addVertex('ciaone')
    graph.vertexNum.should.equal(2)
    graph.adjacencyList.size.should.equal(2)

    graph.addVertex('ciao')
    graph.vertexNum.should.equal(2)
    graph.adjacencyList.size.should.equal(2)
}

function addEdgeTest () {
    var graph = new Graph()
    graph.addVertex('ciao')
    graph.addVertex('bello')
    graph.addEdge('ciao', 'bello', '')
    graph.adjacencyList.get(graph.findVertex('ciao'))[0].destination.word.should.equal('bello')

    graph.addEdge('ciao', 'bello', '')
    graph.adjacencyList.get(graph.findVertex('ciao'))[0].attract.should.equal(2)

    graph.addEdge('ciao', 'bello', ',')
    graph.adjacencyList.get(graph.findVertex('ciao'))[0].attract.should.equal(2)
    graph.adjacencyList.get(graph.findVertex('ciao'))[1].attract.should.equal(1)
}

describe('Graph', function () {

    describe('#addVertex(word)', function () {
      it('should add a vertex to the graph', addVertexTest)
    })

    describe('#addEdge(destination, mod)', function () {
        it('should add an edge between existent vertexes', addEdgeTest)
      })

  })
