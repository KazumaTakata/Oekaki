class perlinNoise1D {
  constructor(N) {
    this.N = N
    this.h = 1 / N
    this.gridGrad = new Array(N)
    for (let i = 0; i < N; i++) {
      this.gridGrad[i] = 2 * Math.random() - 1
    }
  }

  sample(x) {
    let index = Math.floor(x * this.N)
    let dis1 = (x - index * this.h) / this.h
    let dis2 = (x - (1 + index) * this.h) / this.h
    let u = this.cubicCurve(dis1)
    let dot =
      (1 - u) * this.gridGrad[index % this.N] * dis1 +
      u * this.gridGrad[(index + 1) % this.N] * dis2
    return dot * 10
  }

  cubicCurve(x) {
    return x * x * (3 - 2 * x)
  }
}

export { perlinNoise1D }
