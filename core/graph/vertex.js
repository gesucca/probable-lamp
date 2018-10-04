class Vertex {
  constructor (word) {
    this.word = word
    this.weigth = 1
  }

  incrementWeigth () {
    this.weigth++
  }
}

module.exports = Vertex
