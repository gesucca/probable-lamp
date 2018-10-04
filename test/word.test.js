var rewire = require('rewire')
var should = require('chai').should()

var word = rewire('../core/graph/word.js')

function splitInPhrasesTest () {
  let tested = word.__get__('splitInPhrases')
  let result = tested('The cat is on the table. You know it is!')

  result.should.be.a('array').with.lengthOf(2)
  result[0].should.equal('The cat is on the table')
  result[1].should.equal('You know it is!')
}

function splitInWordsTest () {
  let tested = word.__get__('splitInWords')
  let result = tested('The cat is on the table')

  result.should.be.a('array').with.lengthOf(6)
  result[1].should.equal('cat')
  result[5].should.equal('table')
}

function stripModTest () {
  let tested = word.__get__('stripModifier')
  let result = tested('cat,')

  result[0].should.equal('cat')
  result[1].should.equal(',')

  result = tested('cat')
  result[0].should.equal('cat')
  result[1].should.equal('')
}

describe('Word', function () {

  describe('#splitInPhrases(paragraph)', function () {
    it('should split input text clob into phrases', splitInPhrasesTest)
  })

  describe('#splitInWords(phrase)', function () {
    it('should split input string clob into words', splitInWordsTest)
  })

  describe('#stripModifier(word)', function () {
    it('should strip punctuation out of the word', stripModTest)
  })

})
