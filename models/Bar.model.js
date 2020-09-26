const { Schema, model } = require('mongoose');
require("../models/User.model");

const barSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.']
    },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    address: {
      type: String,
      required: [true, 'Address is required.']
    },
    minimum_cb: {
      type: Number,
      required: [true, 'Minimum value is required.'],
      min: 0,
      max: 40
    },
    latlng: [Number]
  },
  {
    timestamps: true,
  }
);

module.exports = model('Bar', barSchema);
