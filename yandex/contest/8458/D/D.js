const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

function isValid(numb, stringSize) {
  let nestCount = 0
  for (let i = 0; i < stringSize; i++) {
    if (numb % 2) {
      nestCount--
      if (nestCount < 0) {
        return false
      }
    } else {
      nestCount++
    }
    numb = numb >> 1
  }
  return nestCount === 0
}

rl.on('line', (line) => {
  const n = parseInt(line)
  const stringSize = 2 * n

  if (n === 0) {
    process.stdout.write('')
    return
  }

  for (let i = Math.pow(2, stringSize) - 1; i > Math.pow(2, n) - 2; i--) {
    if (isValid(i, stringSize)) {
      process.stdout.write(i.toString(2).replace(/1/g, '(').replace(/0/g, ')') + '\r\n')
    }
  }
})
