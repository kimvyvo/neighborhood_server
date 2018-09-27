var mongoose = require('mongoose');
require("../models/event.js");
var Event = mongoose.model('Event');

module.exports = {
    addEvent: function(req, res){
        const event = new Event(req.body)
        console.log(event)
        event.save(function(err){
            if (err) {
                res.json(err)
            } 
            else {
                res.json(event)
            }
        })
    },
    getEvents: function(req, res){
        Event.find({}, function(err, events){
            if(err){res.json(err)}
            else{res.json(events)}
        })
    },
    getOneEvent: function(req, res){
        Event.findOne({_id: req.params.id}, function(err, event){
            if(err){res.json(err)}
            else{res.json(event)}
        })
    },
    updateEvent: function(req, res){
        Event.findOneAndUpdate({_id: req.params.id}, req.body, function(err, event){
            if(err){res.json({err})}
            else{res.json(event)}
        })
    },
    deleteEvent: function(req, res){
        Event.findOneAndDelete({_id: req.params.id}, function(err){
            if(err){res.json(err)}
            else{res.json({message: 'Event deleted.'})}
        })
    },
    addAttendee: function(req, res){
        Event.findOneAndUpdate({_id: req.params.id}, {$push: {attendees: req.body}}, function(err){
            if(err){response.json({err})}
            else{response.json({message: 'Attendee added'})}
        })
    }
}
