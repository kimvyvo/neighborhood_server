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
    },
    getAll: function(req, res){
        User.find({}, function(err, users){
            if(err){res.json(err)}
            else{res.json(users)}
        })
    },
    getOne: function(req, res){
        User.findOne({username: req.params.username}, function(err, user){
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
    },
    login: function(req, res){
        User.findOne({username: req.body.username}, function(err, user){
            if (users.length === 0){
                res.json({"no_user_found": "no user found"})
            }
            else{
                bcrypt.compare(req.body.pass, users[0].pass_hs)
                .then( result => {
                    if (result == false){
                        res.json({"password_incorrect": "password incorrect"})
                    } else if (result == true){
                        res.json(user)
                    }
                })
                .catch( error => {console.log(error)})
            }
        })
    },
}