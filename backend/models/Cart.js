
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: String, required: true },
  items: [
    {
      dishId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);

