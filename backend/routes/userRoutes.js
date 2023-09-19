const express = require('express');
const router = express.Router();
const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!(name && email && password)) {
            res.status(400).json({ error: 'All fields are required' });
        }

        const oldUser = await usersModel.findOne({ email });
        if (oldUser) { 
           res.status(400).json({ error: 'User already exists, Please Login !!' });
        }

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
        if (!(email && password)) {
            res.status(400).json({ error: 'All fields are required' });
        }

        const user = await usersModel.findOne({ email: email, password: password });
        if (user) {
            const token = jwt.sign({ email: user.email, name: user.name, id: user.id }, "tokendecoder", { expiresIn: "24hrs" });
            res.cookie("token", token);
            res.status(200).json({ message: 'Login Successful', token });
        } else {
            res.status(400).json({ error: 'Invalid email and password.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Error occured while logging user'
        });
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
