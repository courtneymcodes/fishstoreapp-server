const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
require('dotenv').config()
SALT_ROUNDS = Number(process.env.SALT_ROUNDS)

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()
  
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });

  module.exports = mongoose.model('User', userSchema);