const mongoose = require('mongoose')

const Blog = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    content: {
        type: String,
        required: true,
        min: 100,
        max: 3000

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogger",
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("Blog", Blog)