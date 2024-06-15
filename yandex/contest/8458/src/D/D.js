const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

let result = ''

function isValid(str) {
  let nestCount = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      nestCount++
    } else {
      nestCount--
      if (nestCount < 0) {
        return false
      }
    }
  }
  return nestCount === 0
}

rl.on('line', (line) => {
  const n = parseInt(line)
  const stringSize = 2 * n

  for (let i = Math.pow(2, n) - 1; i < Math.pow(2, stringSize); i++) {
    const binary = i.toString(2).padStart(stringSize, '0')
    if (isValid(binary)) {
      const variant = binary.replace(/0/g, '(').replace(/1/g, ')')
      process.stdout.write(variant + '\r\n')
    }
  }
})
