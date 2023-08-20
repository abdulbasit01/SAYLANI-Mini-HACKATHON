const mongoose = require('mongoose')

const Blogger = mongoose.Schema({
    firstName: {
        type: String,
        required: 'First Name is required'
    },
    lastName: {
        type: String,
        required: 'Last Name is required'
    },
    email: {
        type: String,
        lowercase: true,
        required: 'Email address is required',
        unique: [true, `${this.email} is already used`],
    },
    password: {
        type: String,
        min: [10, "Password must be at least of 10 characters"],
        required: [true, "Password is required"],
        select: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("Blogger", Blogger)