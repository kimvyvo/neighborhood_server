var mongoose = require('mongoose');
require("../models/share.js");
var Share = mongoose.model('Share');

module.exports = {
    addShare: function(req, res){
        var share = new Share(req.body)
        share.save(function(err){
            if (err){res.json({error: err})}
            else {res.json(share)}
        })
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