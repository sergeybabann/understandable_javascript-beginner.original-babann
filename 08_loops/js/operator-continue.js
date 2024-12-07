let i = 0
while (i < 10) {
  i++
  console.log('Start ' + i)
  if (i == 2 || i == 5) {
    continue
  }
  console.log('End ' + i)
}
