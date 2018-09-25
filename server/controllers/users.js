var mongoose = require('mongoose');
require("../models/user.js");
var User = mongoose.model('User');

module.exports = {
    addUser: function(req, res){
        const user = new User(req.body)
        user.save(function(err){
            if (err) {res.json(err)} 
            else {res.json(user)}
        })
    },
    getAll: function(req, res){
        User.find({}, function(err, users){
            if(err){res.json(err)}
            else{res.json(users)}
        })
    },
    getOne: function(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){res.json(err)}
            else{res.json(user)}
        })
    },
    updateUser: function(req, res){
        User.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true }, function(err, user){
            if(err){res.json({err})}
            else{res.json(user)}
        })
    },
    deleteUser: function(req, res){
        User.findOneAndDelete({_id: req.params.id}, function(err){
            if(err){res.json(err)}
            else{res.json({message: 'User deleted.'})}
        })
    }
}