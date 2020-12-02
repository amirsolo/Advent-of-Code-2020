// Question: https://adventofcode.com/2020/day/1

const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    const dataArr = data
      .toString()
      .trim()
      .split('\n')
      .map((x) => +x)

    const arr = dataArr.flatMap((x) => {
      const z = 2020 - x
      const arr2 = dataArr.flatMap((y) => {
        return dataArr.includes(z - y) ? y * x * (z - y) : []
      })
      return arr2
    })

    var answer = Math.max(...arr)
    console.log(answer)
  }
})
