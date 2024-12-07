// конструкция for in
let user = {
  name: 'John',
  age: 25,
  country: 'USA',
  state: true,
}

for (let key in user) {
  console.log(user[key])
}
