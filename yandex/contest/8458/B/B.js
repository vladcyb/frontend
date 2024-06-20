const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
})

let lines = []

rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const size = lines[0]
  const arr = lines.slice(1)
  let max = 0

  arr.reduce((accumulator, currentValue) => {
    if (currentValue === '1') {
      accumulator += 1
    } else {
      accumulator = 0
    }
    if (accumulator > max) {
      max = accumulator
    }
    return accumulator
  }, 0)

  process.stdout.write(result.toString())
})
