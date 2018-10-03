console.log(require('./msg.js').initMsg)

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

let readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

readLine.on('line', require('./dispatch.js').dispatch)
