const express = require('express');
const router = express.Router();
const groupModel = require('../models/groupModel');

router.get('/', async (req, res) => {
    try {
        const data = await groupModel.find();
        res.status(200).json({ groups: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the groups' });
    }
});

router.post('/create', async (req, res) => {
    try {
        const { title, description, usersList } = req.body;
        if (!(title && description && usersList)) {
            res.status(400).json({ error: 'All fields are required' });
        }

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

router.put('/:groupId', async (req, res) => {
    try {
        const { title, description, usersList } = req.body;
        if (!(title && description && usersList)) {
            res.status(400).json({ error: 'All fields are required' });
        }

        const group = await groupModel.findOne({_id:req.params.groupId});
        group.title = title;
        group.description = description;
        group.usersList = usersList;
        const updatedGroup = await group.save();
        res.status(201).json({ message: 'Group updated successfully', group: updatedGroup });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the group' });
    }
});

router.delete('/:groupId', (req, res) => {
    try {
        groupModel.findByIdAndRemove({ _id: req.params.groupId }, function (err) {
            if (err) res.status(400).json(err);
            else res.status(200).json('Group deleted successfully');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the group' });
    }
});

module.exports = router;
