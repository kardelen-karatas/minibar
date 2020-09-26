const { Schema, model } = require('mongoose');
require("../models/Bar.model");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Bar" }]
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);