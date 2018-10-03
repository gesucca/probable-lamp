class Arc {
  constructor (nodeFrom, nodeTo) {
    this.nodeFrom = nodeFrom
    this.nodeTo = nodeTo

    this.weigth = 1
    this.modifier = null
  }

  addWeigth (add) {
    this.weigth += add
  }
}

module.exports = Arc
