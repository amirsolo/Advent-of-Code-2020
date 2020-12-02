// Question: https://adventofcode.com/2020/day/2

const fs = require('fs')
fs.readFile('./input.txt', (err, data) => {
  if (err) return console.log(err)

  const dataArr = data.toString().trim().split('\n')

  let correctPasswords = []

  dataArr.forEach((e) => {
    const firstPositoin = parseInt(e.split('-')[0]) - 1
    const secondPositoin = parseInt(e.split('-')[1].split(' ')[0]) - 1
    const letter = e.split('-')[1].split(' ')[1].replace(':', '')
    const password = e.split('-')[1].split(' ')[2]

    // if first position matched -> second position cannot be matched
    // if first position doesn't match -> second has to match
    if (password[firstPositoin] === letter) {
      if (password[secondPositoin] !== letter) {
        return correctPasswords.push(password)
      }
    } else {
      if (password[secondPositoin] === letter) {
        return correctPasswords.push(password)
      }
    }
  })

  console.log(correctPasswords.length)
})
