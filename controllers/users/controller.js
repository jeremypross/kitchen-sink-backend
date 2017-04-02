const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

const controller = {};

const User = require('../../models/user');
const Recipe = require('../../models/recipe');

controller.index = (req, res) => {
  User
    .findAll()
    .then((data) => res.json({ user: data }))
    .catch((err) => console.log('ERROR', err));
};


controller.authorizeToken = (req, res) => {
  jwt.verify(req.headers.authorization, 'taco cat', (err, decoded) => {
    if (err) {
      res
        .status(401)
        .json({ error: err.message });
        console.log("HELLLLOOOOO");
    } else {
      Recipe
        .findByUserEmail(decoded.email)
        .then((data) => {
          console.log("DASHBOARD DATA:", data);
          res.json({
            data: data,
            user_id: decoded.user_id
          });
        })
        .catch((err) => {
          console.log('ERROR', err);
        })
        console.log('JSON DECODED', decoded);
    }
  });
}

controller.show = (req, res) => {
  User
    .findById(req.params.id)
    .then((data) => {
      res.render('users/show', { users: data });
    })
    .catch((err) => console.log('ERROR', err));
}

controller.create = (req, res) => {
  console.log('req body in controller.create', req.body);
  User
    .create(req.body.user)
    .then((data) => {
      console.log('data in controller', data);
      res.status(201)
      res.json({ user: data })
    })
    .catch(err => console.log('ERROR', err));
};

controller.login = (req, res) => {
  User
    .findByEmail(req.body.user.email)
    .then((user) => {
      // if user exists
      if (user) {
        // compare password with hashed password using bcrypt
        const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          // create token with email from user record with options
          const token = jwt.sign({
            email: user.email,
            user_id: user.id
          }, 'taco cat', { expiresIn: '7d' });
            // respond with token and user ID
            res.json({ token: {
                token: token,
                user_id: user.id
              }
            });
            console.log('User ID:', user.id)
            console.log('token in controller.process_login', token);
        } else {
          res.sendStatus(401)
        }
      } else {
        res.status(404)
        .json({ error: 'No user found' });
      }
    });
}


module.exports = controller;
