const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function(next){
    let user = this;
    if(!user.isModified('password')) {
        return next();
    }
    const hashPassword = require('../utils/password').hashPassword;
    this.password = await hashPassword(this.password);
    next();
});

module.exports = mongoose.model('User', userSchema);