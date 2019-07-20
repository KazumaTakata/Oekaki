import { perlinNoise1D } from './perlinNoise'

let perlin = new perlinNoise1D(100)

perlin.sample(0.94)

let canvas = document.getElementById('main')

var ctx = canvas.getContext('2d')
// ctx.moveTo(0, 100)
// for (let i = 0; i < 1000; i++) {
//   ctx.lineTo(i / 10, 100 - 50 * perlin.sample(i / 1000))
// }

let rect = [
  { x: 20, y: 20 },
  { x: 20, y: 200 },
  { x: 200, y: 200 },
  { x: 200, y: 20 }
]

let distance = 0

function drawNoiseyLine(ctx, start, end, N) {
  let dir = { x: (end.x - start.x) / N, y: (end.y - start.y) / N }
  let dirSize = Math.sqrt(dir.x * dir.x + dir.y * dir.y)
  let normal = { x: dir.y / dirSize, y: -dir.x / dirSize }
  ctx.moveTo(start.x, start.y)
  for (let i = 0; i < N; i++) {
    distance += dirSize
    let noise = perlin.sample(distance / 1000) / 2
    ctx.lineTo(
      start.x + dir.x * (i + 1) + normal.x * noise,
      start.y + dir.y * (i + 1) + normal.y * noise
    )
  }
  ctx.stroke()
}

// let rectPerpe = []

let leng = rect.length

// for (let i = 0; i < leng; i++) {
//   let start = rect[i]
//   let end = rect[(i + 1) % leng]
//   let dir = { x: end.x - start.x, y: end.y - start.y }
//   let normal = { x: dir.y, y: -dir.x }
//   rectPerpe.push(normal)
// }

// let howLong = 0

for (let i = 0; i < leng; i++) {
  drawNoiseyLine(ctx, rect[i % leng], rect[(i + 1) % leng], 100)
}
