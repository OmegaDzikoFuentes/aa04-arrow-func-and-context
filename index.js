const User = require('./classes/user');

const michelle = new User('Michelle');

console.log(michelle.changeName("Elle"));

const greetAfterNameChange = (changeName, newName) => {
  const name = michelle.changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange(michelle.changeName, 'Elle');
  // should print out: Hi my name is Elle
