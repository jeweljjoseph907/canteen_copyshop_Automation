const express = require('express');
const router = express.Router();
const multer = require('multer');
const Order = require('../models/Order.js');
const upload = multer({ dest: 'uploads/' });

// Create New Order
router.post('/', upload.array('files'), async (req, res) => {
  try {
    const files = req.files.map(file => ({
      path: file.path,
      originalName: file.originalname
    }));

    const order = new Order({
      studentId: req.body.studentId,
      studentName: req.body.studentName,
      files,
      options: JSON.parse(req.body.options),
      totalPrice: parseFloat(req.body.totalPrice)
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get All Orders (Admin)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Order Status
router.patch('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;