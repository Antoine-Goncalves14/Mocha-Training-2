const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
  {
    item: String,
    total: Number,
    notes: String,
  },
  {
    collection: 'orders',
  },
); //overrides default collection name auto created

module.exports = mongoose.model('Order', OrderSchema);
