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
            var data = []
            if(err){res.json({error: err})}
            else{
                // for (share of shares){
                //     if (share.isAvailable){
                //         data.push(share)
                //     }
                // }
                // console.log(data)
                res.json({"data":shares})
            }
        })
    },
    addUserResponse: function(req,res){
        User.findOne({_id: req.body.responder},function(err, user){
            console.log("Responder user_______")
            console.log(user)
            if (err){
                return res.json(err)
            }else {
                Share.findByIdAndUpdate({_id: req.params.id},{$push: {responses: user}}, function(err){
                    if(err){
                        return res.json(err)
                    }else{
                        return res.json({"status":200})
                    }
                })
            }
        })
    },
    getUserLending: function(req,res){
        Share.find({},function(err,shares){
            if (err){
                return res.json(err)
            } else {
                var data = []
                for (share of shares){
                    console.log(share)
                    if ((share.isLending) && (share.lender == req.params.id)){
                        data.push(share)
                    }
                }
                return res.json({"data":data})
            }
        })
    },
    getUserBorrowing: function(req,res){
        Share.find({},function(err,shares){
            if (err){
                return res.json(err)
            } else {
                var data = []
                for (share of shares){
                    console.log(share)
                    if (!(share.isLending) && (share.borrower == req.params.id)){
                        data.push(share)
                    }
                }
                return res.json({"data":data})
            }
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