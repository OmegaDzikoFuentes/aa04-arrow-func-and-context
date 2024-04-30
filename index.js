const User = require('./classes/user');

const michelle = new User('Michelle');

console.log(michelle.changeName("Elle"));

const greetAfterNameChange = (newName) => {
  const name = michelle.changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange('Elle');
  // should print out: Hi my name is Elle
