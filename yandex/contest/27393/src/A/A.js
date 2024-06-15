const readline = require('readline')
const fs = require('fs')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

function getTemperature(tempLine) {
  const split = tempLine.split(' ')
  return [parseInt(split[0]), parseInt(split[1])]
}

function getFinishTemp(currentTemp, desiredTemp, mode) {
  switch (mode) {
    case 'freeze':
      return Math.min(currentTemp, desiredTemp)
    case 'heat':
      return Math.max(currentTemp, desiredTemp)
    case 'auto':
      return desiredTemp
    default:
      return currentTemp
  }
}

let lines = []
rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const [temp, mode] = lines
  const [currentTemp, desiredTemp] = getTemperature(temp)
  process.stdout.write(getFinishTemp(currentTemp, desiredTemp, mode).toString())
})
