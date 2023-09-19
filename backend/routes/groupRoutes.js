const express = require('express');
const router = express.Router();
const groupModel = require('../models/groupModel');

router.get('/', async (req, res) => {
    try {
        const data = await groupModel.find();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the groups' });
    }
 });

router.post('/create', async (req, res) => {
    try {
        const { title, description, usersList } = req.body;

        const newGroup = new groupModel({
            title,
            description,
            usersList,
        });

        const savedGroup = await newGroup.save();

        res.status(201).json({ message: 'Group created successfully', group: savedGroup });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the group' });
    }
});

// Edit a group
router.put('/:groupId', (req, res) => {
    // Implementation
});

// Delete a group
router.delete('/:groupId', (req, res) => {
    // Implementation
});

module.exports = router;
