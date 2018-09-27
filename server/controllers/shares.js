var mongoose = require('mongoose');
require("../models/share.js");
var Share = mongoose.model('Share');
require("../models/user.js");
var User = mongoose.model('User');

module.exports = {
    addShare: function(req, res){
        if (req.body.lender){
            var share = new Share(req.body)
            share.save(function(err){
                if (err){res.json({error: err})}
                else {res.json(share)}
            })
        } else if (req.body.borrower){
            var share = new Share(req.body)
            share.save(function(err){
                if (err){res.json({error: err})}
                else {res.json(share)}
            })
        }
    },
    getShares: function(req, res){
        Share.find({}, function(err, shares){
            if(err){res.json({error: err})}
            else{res.json(shares)}
        })
    },
    getOneShare: function(req, res){
        Share.findOne({_id: req.params.id}, function(err, share){
            if(err){res.json({error: err})}
            else{res.json(share)}
        })
    },
    updateShare: function(req, res){
        Share.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true }, function(err, share){
            if(err){res.json({error: err})}
            else{res.json(share)}
        })
    },
    deleteShare: function(req, res){
        Share.findOneAndDelete({_id: req.params.id}, function(err){
            if(err){res.json({error: err})}
            else{res.json({message: 'Share deleted.'})}
        })
    },
}