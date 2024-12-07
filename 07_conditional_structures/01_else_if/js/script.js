// конструкция if
let age = 25

if (age > 18) {
  let doubleAge = age * 2
  console.log('Condition true. Double age is: ' + doubleAge)
}

console.log('Always run ex.1')

// конструкция if else
let age_2 = 25
if (age_2 >= 18) {
  console.log('If statement ex.2')
} else {
  console.log('Else statement ex.2')
}

console.log('Always run ex.2')

// конструкция if / else if / else
let age_3 = 24
if (age_3 >= 25) {
  console.log('If statement ex.3')
} else if (age_3 < 25) {
  console.log('Else if statement ex.3')
} else {
  console.log('Else statement ex.3')
}

console.log('Always run ex.3')

// пример 4
let currentUser = 'student'
let isAdmin

if (currentUser == 'admin') {
  isAdmin = true
  console.log('This is admin')
} else {
  isAdmin = false
  console.log('This NOT admin')
}
