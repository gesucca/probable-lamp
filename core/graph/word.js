var Node = require('./node')
var Arc = require('./arc')

function splitInPhrases (paragraph) {
  if (paragraph.slice(-1) === '.') {
    paragraph = paragraph.slice(0, -1)
  }

  return paragraph.split('. ')
}

function splitInWords (phrase) {
  return phrase.split(' ')
}

function addToGraph (graph, words, whichWord) {
  let node = new Node(words[whichWord])
  let arcs = []

  let pre = null
  let post = null

  if (whichWord > 0) {
    pre = new Node(words[whichWord - 1])
  }
  if (whichWord < words.length - 1) {
    post = new Node(words[whichWord + 1])
  }

  if (pre != null) {
    arcs.push(new Arc(pre, node))
  }
  if (post != null) {
    arcs.push(new Arc(node, post))
  }
  // TODO: set modifier

  graph.addVertex(node, arcs)
}
