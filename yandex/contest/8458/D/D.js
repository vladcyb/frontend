const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

function generateParentheses(n) {
  function addToSequence(current, openCount, closeCount) {
    if (current.length === 2 * n) {
      console.log(current)
      return
    }

    if (openCount < n) {
      addToSequence(current + '(', openCount + 1, closeCount)
    }

    if (closeCount < openCount) {
      addToSequence(current + ')', openCount, closeCount + 1)
    }
  }

  addToSequence('', 0, 0)
}

rl.on('line', (line) => {
  const n = parseInt(line)

  generateParentheses(n)

  rl.close()
})
