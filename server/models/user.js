const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: [true, 'Username cannot be blank.'],
        unique: [true, 'Username already exists.'],
        dropDups: true,
        minlength: [3, 'Username must be at least 3 characters.'],
    },
    pass_hs: {
        type: String,
        required: [true, 'Password cannot be blank.'],
        minlength: [8, 'Password must be at least 8 characters.'],
    },
    address: {
        type: String,
        default: ''
    },
    longitude: {
        type: String,
        default: ''
    },
    latitiude: {
        type: String,
        default: ''
    },
    contact: {
        type: String,
        default: ''
    },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
})
mongoose.model('User', UserSchema)

module.exports = UserSchema