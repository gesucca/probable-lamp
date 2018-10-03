class Node {
  constructor (word) {
    this.word = word

    this.outArcs = []
    this.inArcs = []
  }

  addInArc (arc) {
    this.inArcs.push(arc)
  }

  addOutArc (arc) {
    this.outArcs.push(arc)
  }
}

module.exports = Node
