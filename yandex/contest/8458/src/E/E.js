const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

let lines = []

function areAnagrams(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false
  }

  const firstMap = new Map()
  const secondMap = new Map()

  const { length } = firstArr

  for (let i = 0; i < length; i++) {
    const count = firstMap.get(firstArr[i])
    firstMap.set(firstArr[i], (count ?? 0) + 1)
  }

  for (let i = 0; i < length; i++) {
    const count = secondMap.get(secondArr[i])
    secondMap.set(secondArr[i], (count ?? 0) + 1)
  }

  for (let i = 0; i < length; i++) {
    const letter = firstArr[i]
    if (firstMap.get(letter) !== secondMap.get(letter)) {
      return false
    }
  }
  return true
}

rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const [first, second] = lines
  const [firstArr, secondArr] = [Array.from(first), Array.from(second)]
  process.stdout.write(areAnagrams(firstArr, secondArr) ? '1' : '0')
})
