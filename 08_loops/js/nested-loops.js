// вложенные циклы

for (let i = 1; i < 3; i++) {
  console.log('Outside: ' + i)
  for (let j = 1; j < 3; j++) {
    console.log('Inside: ' + j)
  }
}
