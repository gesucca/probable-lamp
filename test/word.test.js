var rewire = require('rewire')
var should = require('chai').should()

var word = rewire('../core/graph/word.js')

function splitInPhrasesTest () {
  let tested = word.__get__('splitInPhrases')
  let result = tested('The cat, is on the table. You know it is!')

  result.should.be.a('array').with.lengthOf(2)
  result[0].should.equal('The cat, is on the table')
  result[1].should.equal('You know it is!')
}

function splitInWordsTest () {
  let tested = word.__get__('splitInWords')
  let result = tested('The cat, is on the table')

  result.should.be.a('array').with.lengthOf(6)
  result[1].should.equal('cat,')
  result[5].should.equal('table')
}

var Graph = require('../core/graph/graph');
var graph = new Graph();

function addToGraphTest () {
  let tested = word.__get__('addToGraph')
  let result = tested(graph, ['The', 'cat,', 'is', 'on', 'the', 'table'], 1)

  console.log(graph)
  // TODO

}

describe('Word', function () {

  describe('#splitInPhrases(paragraph)', function () {
    it('should split input text clob into phrases', splitInPhrasesTest)
  })

  describe('#splitInWords(phrase)', function () {
    it('should split input string clob into words', splitInWordsTest)
  })

  describe('#addToGraph(graph, words, whichWord)', function () {
    it('should add the word into the graph, creating the node and the vertexes', addToGraphTest)
  })
})
