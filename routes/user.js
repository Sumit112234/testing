const express = require('express');
const User = require('../model/user');
const router = express.Router();

// Mock Data
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get user by ID
router.get('/mongo', async(req, res) => {
    try {
        let user = await User.find();
        res.json({user});
    } catch (error) {
        res.json({message : error})
    }

});

// Add a new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
