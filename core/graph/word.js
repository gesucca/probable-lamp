var Graph = require('./graph')

function splitInParagraphs (text) {
  // TODO
}

function splitInPhrases (paragraph) {
  if (paragraph.slice(-1) === '.') {
    paragraph = paragraph.slice(0, -1)
  }
  return paragraph.split('. ')
}

function splitInWords (phrase) {
  return phrase.split(' ')
}

function addToGraph (graph, words) {
  // TODO
  words.forEach(word => {
    stripModifier(word)
  })
}

function stripModifier (word) {
  let modifiers = [',', ';', ':']

  if (modifiers.indexOf(word.slice(-1)) > -1) {
    return [word.slice(0, -1), word.slice(-1)]
  } else {
    return [word, '']
  }
}

function read (text) {
  var graph = new Graph()
  splitInParagraphs(text).forEach(paragraph => {
    splitInPhrases(paragraph).forEach(phrase => {
      addToGraph(graph, splitInWords(phrase))
    })
  })
  return graph
  // TODO: write test
}

module.exports = read
