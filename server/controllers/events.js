var mongoose = require('mongoose');
require("../models/event.js");
require("../models/user.js");
var Event = mongoose.model('Event');
var User = mongoose.model('User');

module.exports = {
    addEvent: function(req, res){
        const event = new Event(req.body)
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
            else{res.json({"data":events})}
        })
    },
    getOneEvent: function(req, res){
        Event.findOne({_id: req.params.id}, function(err, event){
            if(err){res.json(err)}
            else{res.json(event)}
        })
    },
    getUserEvent: function(req,res){
        Event.find({host: req.params.id},function(err,events){
            if(err){
                res.json(err)
            }else{
                res.json({"data":events})
            }
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
        console.log(req.body.attendee_id)
        Event.findOne({_id: req.params.id}, function(err, event){
            if (err){
                return res.json(err)
            }else{
                if(event.attendees.length > 0){
                    for (let attendee of event.attendees){
                        if (attendee._id == req.body.attendee_id){
                            return res.json({errors:'This user has already written a review.'})
                        }
                    }
                }
                User.findOne({_id: req.body.attendee_id},function(err, user){
                    if (err){
                        return res.json(err)
                    }else{
                        Event.findOneAndUpdate({_id: req.params.id},{$push: {attendees: user}}, function(err){
                            if(err){
                                return res.json(err)
                            }else{
                                return res.json({status:200})
                            }
                        })
                        
                    }
                })
            }
        })
       
    }
}
