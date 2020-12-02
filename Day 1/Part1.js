// Question: https://adventofcode.com/2020/day/1

const fs = require('fs')
fs.readFile('./input.txt', (err, data) => {
  if (err) return console.log(err)

  const dataArr = data
    .toString()
    .trim()
    .split('\n') // split by "newline" char
    .map((x) => +x) // convert to Number

  const arr = dataArr.flatMap((e) => {
    return dataArr.includes(2020 - e) ? (2020 - e) * e : []
  })

  var answer = Math.max(...arr)
  console.log(answer)
})
