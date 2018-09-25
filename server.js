const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
app.listen(8000, function() {
    console.log("listening on port 8000");
<<<<<<< HEAD
})

// SCHEMAS

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
User = mongoose.model('User')
const EventSchema = new mongoose.Schema ({
    name: String,
    time: Date,
    location: String,
    host: UserSchema,
    attendees: [UserSchema],
})
mongoose.model('Event', EventSchema)
Event = mongoose.model('Event')

// ROUTES

// USER ROUTES

app.get('/users', function(req, res){
    User.find({}, function(err, users){
        if(err){res.json(err)}
        else{res.json(users)}
    })
})
app.get('/users/:id', function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
        if(err){res.json(err)}
        else{res.json(user)}
    })
})
app.post('/users', function(req, res){
    const user = new User(req.body)
    user.save(function(err){
        if (err) {res.json(err)} 
        else {res.json(user)}
    })
})
app.put('/users/:id', function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true }, function(err, user){
        if(err){res.json({err})}
        else{res.json(user)}
    })
})
app.delete('/users/:id', function(req, res){
    User.findOneAndDelete({_id: req.params.id}, function(err){
        if(err){res.json(err)}
        else{res.json({message: 'User deleted.'})}
    })
})

// EVENT ROUTES

app.get('/events', function(req, res){
    Event.find({}, function(err, events){
        if(err){res.json(err)}
        else{res.json(events)}
    })
})
app.get('/events/:id', function(req, res){
    Event.findOne({_id: req.params.id}, function(err, event){
        if(err){res.json(err)}
        else{res.json(event)}
    })
})
app.post('/events', function(req, res){
    const event = new Event(req.body)
    event.save(function(err){
        if (err) {res.json(err)} 
        else {res.json(event)}
    })
})
app.put('/events/:id', function(req, res){
    Event.findOneAndUpdate({_id: req.params.id}, req.body, function(err, event){
        if(err){res.json({err})}
        else{res.json(event)}
    })
})
app.delete('/events/:id', function(req, res){
    Event.findOneAndDelete({_id: req.params.id}, function(err){
        if(err){res.json(err)}
        else{res.json({message: 'Event deleted.'})}
    })
})
app.post('/events/:id', function(req, res){
    Event.findOneAndUpdate({_id: req.params.id}, {$push: {attendees: req.body}}, function(err){
        if(err){response.json({err})}
        else{response.json({message: 'Attendee added'})}
    })
=======
>>>>>>> 59e2ced160d70968ae1a86e0659b961665cc4178
})