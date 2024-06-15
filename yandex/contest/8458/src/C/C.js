const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

let N
let isFirstLine = true
let arr = []
let i = 0

rl.on('line', (line) => {
  if (isFirstLine) {
    N = parseInt(line)
    if (!isNaN(N)) {
      isFirstLine = false
    }
  } else {
    const curr = parseInt(line)
    if (isNaN(curr)) {
      return
    }
    if (arr[i - 1] !== curr) {
      arr.push(curr)
      i++
    }
  }
})

rl.on('close', () => {
  arr.forEach((item) => {
    process.stdout.write(`${item}\r\n`)
  })
})
