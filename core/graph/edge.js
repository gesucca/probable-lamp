class Edge {
  constructor (destination, mod) {
    this.destination = destination
    this.mod = mod

    this.attract = 1
  }

  increaseAttractiveness () {
    this.attract++
  }
}

module.exports = Edge
