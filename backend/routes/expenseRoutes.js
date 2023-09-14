const express = require('express');
const router = express.Router();

// Add an expense
router.post('/add', (req, res) => {
    // Implementation
});

// Edit an expense
router.put('/:expenseId', (req, res) => {
    // Implementation
});

// Settle an expense
router.put('/:expenseId/settle', (req, res) => {
    // Implementation
});

// Delete an expense
router.delete('/:expenseId', (req, res) => {
    // Implementation
});

module.exports = router;
