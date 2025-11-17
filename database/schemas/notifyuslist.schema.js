const mongoose = require('mongoose')
const { Schema } = mongoose

const notifyuslistSchema = new Schema(
    {
        phoneno: { type: String, required: true },
        category: { type: String },
        country: { type: String },
        country_code: { type: String },
        user_agent: { type: String },
        time: { type: String },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

module.exports = mongoose.model('notifyuslist', notifyuslistSchema)