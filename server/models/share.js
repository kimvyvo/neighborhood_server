const mongoose = require('mongoose')
const UserSchema = require('./user.js')
const ShareSchema = new mongoose.Schema ({
    item: String,
    lending: Boolean, // true --> lending, false -> looking
    isAvailable: Boolean,
    description: String,
    lender: UserSchema,
    borrower: UserSchema
})
mongoose.model('Share', ShareSchema)

module.exports = ShareSchema