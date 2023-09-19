const express = require('express');
const router = express.Router();
const usersModel = require('../models/usersModel');

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new usersModel({ name, email, password });

        const saveUser = await newUser.save();
        res.status(201).json({message: 'User saved successfully', user: saveUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error occured while creating user'});
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new usersModel({ name, email, password });

        const saveUser = await newUser.save();
        res.status(201).json({ message: 'User saved successfully', user: saveUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error occured while creating user' });
    }
});
// Add a member to a group
router.post('/:groupId/add', (req, res) => {
    // Implementation
});

// Remove a member from a group
router.delete('/:groupId/remove/:userId', (req, res) => {
    // Implementation
});

module.exports = router;
