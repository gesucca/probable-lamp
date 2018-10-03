var msg = require('./msg.js')

var dispatcher = function (line) {
  if (line === 'ciao') {
    console.log('porco')
  } else {
    console.log(line)
  }
}

exports.dispatch = dispatcher
