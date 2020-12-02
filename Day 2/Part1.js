// Question: https://adventofcode.com/2020/day/2

const fs = require('fs')
fs.readFile('./input.txt', (err, data) => {
  if (err) return console.log(err)

  const dataArr = data.toString().trim().split('\n')

  let correctPasswords = []

  dataArr.forEach((e) => {
    const min = parseInt(e.split('-')[0])
    const max = parseInt(e.split('-')[1].split(' ')[0])
    const letter = e.split('-')[1].split(' ')[1].replace(':', '')
    const password = e.split('-')[1].split(' ')[2]

    const count = password.split(letter).length - 1

    if (count >= min && count <= max) return correctPasswords.push(password)
  })

  console.log(correctPasswords.length)
})
