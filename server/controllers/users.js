var mongoose = require('mongoose');
require("../models/user.js");
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

module.exports = {
    addUser: function(req, res){
        bcrypt.hash(req.body.pass_hs, 10)
        .then(hashed_password => {
            req.body.pass_hs = hashed_password
            var user = new User(req.body)
            user.save(function(err){
                if (err){res.json('Error adding user.')} 
                else {res.json(user)}
            })
        })
        .catch(error => {console.log(error)})
        // const user = new User(req.body)
        // user.save(function(err){
        //     if (err) {res.json(err)} 
        //     else {res.json(user)}
        // })
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