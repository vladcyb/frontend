const readline = require('readline')
const fs = require('fs')

const fileStream = fs.createReadStream(__dirname + '/input.txt')

const rl = readline.createInterface({
  input: fileStream,
})

function convertDataFromLines(lines) {
  let graphSize = parseInt(lines[0])
  const points = []
  for (let i = 1; i < graphSize + 1; i++) {
    const split = lines[i].split(' ')
    points.push({
      id: i,
      x: parseInt(split[0]),
      y: parseInt(split[1]),
      order: 0,
    })
  }

  const maxLength = parseInt(lines[graphSize + 1])
  const fromTo = lines[graphSize + 2].split(' ')
  const fromId = parseInt(fromTo[0])
  const toId = parseInt(fromTo[1])

  return {
    points,
    maxLength,
    fromId,
    toId,
  }
}

function getLength(point1, point2) {
  return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y)
}

function makeGraph({ points, maxLength }) {
  const graph = []
  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    graph.push({
      ...point,
      canVisit: points
        .filter((item) => {
          return !(item.id === point.id || getLength(point, item) > maxLength)
        })
        .map((item) => item.id),
    })
  }
  return graph
}

function getMinimumRoadsNumber(graph, fromId, toId) {
  const visited = new Set([fromId])
  let queue = [graph[fromId - 1]]

  while (queue.length) {
    const currentPoint = queue.shift()
    if (currentPoint.id === toId) {
      return currentPoint.order
    }

    const { canVisit } = currentPoint

    for (let i = 0; i < canVisit.length; i++) {
      const nextId = canVisit[i]

      if (!visited.has(nextId)) {
        const item = graph.find((item) => item.id === nextId)
        queue.push({
          ...item,
          order: currentPoint.order + 1,
        })
        visited.add(nextId)
      }
    }
  }
  return -1
}

let lines = []
rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const converted = convertDataFromLines(lines)
  const graph = makeGraph(converted)
  process.stdout.write(
    getMinimumRoadsNumber(graph, converted.fromId, converted.toId).toString(),
  )
})
