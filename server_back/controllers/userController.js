/* eslint-disable no-console */
const bcrypt = require('bcrypt');
// const User = require('../models/user');
const db = require('../database');

const userController = {

  create: async (req, res) => {
    console.log('req:', req.body.email);
    try {
      const emailSearched = await db.query('SELECT * FROM "user" WHERE email=$1;', [
        req.body.email,
      ]);
      console.log('emailSearched:', emailSearched.rows[0]);
      if (emailSearched.rows[0] !== undefined) {
        res.status(200).json('Mail already used');
      } else {
        await db.query('INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3);', [
          req.body.username, req.body.email, req.body.password,
        ]);
        res.status(200).json('New user created');
      }
      // const hashedPassword = bcrypt.hash(req.body.password, 10);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
