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
    minimumCb: {
      type: Number,
      required: [true, 'Minimum value is required.'],
      min: [0, 'Minimum payment by cart cannot be at less than 0'],
      max: [40, 'Minimum payment by cart cannot be at more than 40']
    },
    latlng: [Number],
    imageURL: String
  },
  {
    timestamps: true,
  }
);

module.exports = model('Bar', barSchema);
