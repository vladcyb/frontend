const fs = require('fs')
const readline = require('readline')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

let lines = []

function areEqual(lhs, rhs) {
  if (lhs.length !== rhs.length) {
    return false
  }
  for (let i = 0; i < lhs.length; i++) {
    if (lhs[i] !== rhs[i]) {
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
  firstArr.sort()
  secondArr.sort()
  process.stdout.write(areEqual(firstArr, secondArr) ? '1' : '0')
})
