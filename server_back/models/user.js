/* eslint-disable no-console */
const db = require('../database');

class User {
  constructor(name) {
    this.name = name;
  }

  async findById(data) {
    console.log('data:', this);
    // const email = await db.query('SELECT * FROM "user" WHERE email=$1;', [
    //   data,
    // ]);
    return new User();
  }
}

module.exports = User;
