const mongoose = require('mongoose')
const UserSchema = require('./user.js')
const EventSchema = new mongoose.Schema ({
    name: String,
    time: Date,
    location: String,
    host: {type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
    attendees: [UserSchema],
})
mongoose.model('Event', EventSchema)

module.exports = EventSchema