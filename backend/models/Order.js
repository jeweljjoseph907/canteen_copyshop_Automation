const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  files: [{
    path: String,
    originalName: String
  }],
  options: {
    paperSize: { type: String, enum: ['a4', 'a3'], default: 'a4' },
    color: { type: String, enum: ['bw', 'color'], default: 'bw' },
    copies: { type: Number, default: 1 },
    binding: { type: Boolean, default: false },
    laminating: { type: Boolean, default: false }
  },
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'printing', 'ready', 'completed'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);