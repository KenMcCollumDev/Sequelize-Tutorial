"use strict"

const Sequelize = require("sequelize");
const sequelize = new Sequelize('ken', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

 
});


console.log("Flag 0")



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  console.log("Flag 1")
  
  const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
console.log("Flag 2")
// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  }).then(() => {
    sequelize.close()
  })
});
console.log("Flag 3")
User.findAll().then(users => {
  console.log(users)
})
console.log("Flag 4")