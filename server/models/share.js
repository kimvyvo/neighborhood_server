const mongoose = require('mongoose')
const UserSchema = require('./user.js')
const ShareSchema = new mongoose.Schema ({
    item: String,
    isLending: Boolean, // true --> lending, false -> looking
    isAvailable: Boolean,
    description: String,
    lender: {type: mongoose.Schema.Types.ObjectId, ref: 'Lender'},
    borrower: {type: mongoose.Schema.Types.ObjectId, ref: 'Borrower'},
    longitude: {type: String, default: ''},
    latitude: {type: String, default: ''},
})
mongoose.model('Share', ShareSchema)

module.exports = ShareSchema