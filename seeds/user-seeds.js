const { User } = require('../models');

const userData = [
  {
    username: "Ninja",
    email: "nina@gmail.com",
    password: "password1234"
  },
  {
    username: "Zachary",
    email: "zach@gmail.com",
    password: "password1234"
  },
  {
    username: "Captain",
    email: "steven@gmail.com",
    password: "password1234"
  },
  {
    username: "Loki",
    email: "loki@gmail.com",
    password: "password1234"
  },
  {
    username: "Thor",
    email: "thor@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;