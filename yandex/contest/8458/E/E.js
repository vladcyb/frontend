const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

let lines = []

function areAnagrams(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false
  }

  const firstMap = new Map()
  const secondMap = new Map()

  const { length } = firstString

  for (let i = 0; i < length; i++) {
    let count = firstMap.get(firstString[i])
    firstMap.set(firstString[i], (count ?? 0) + 1)
    count = secondMap.get(secondString[i])
    secondMap.set(secondString[i], (count ?? 0) + 1)
  }

  for (const [key] of firstMap) {
    if (firstMap.get(key) !== secondMap.get(key)) {
      return false
    }
  }

  return true
}

rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const [first, second] = lines
  process.stdout.write(areAnagrams(first, second) ? '1' : '0')
})
