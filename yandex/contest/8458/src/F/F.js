const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

let n
let k
let cities = []
let lines = []

rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const n = lines.shift()
  let lineIndex = 0
  for (; lineIndex < n; lineIndex++) {
    const [x, y] = lines[lineIndex].split(' ')
    cities.push([parseInt(x), parseInt(y)])
  }
  const k = lines[lineIndex++]
  const lastLine = lines[lineIndex].split(' ')
  const cityFrom = parseInt(lastLine[0])
  const cityTo = parseInt(lastLine[1])
  console.log(cityFrom, cityTo)
})
