var express = require('express');
var router = express.Router();
var User = require('../model/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
    var Newuser = new User({
      name:req.body.name,
      name:req.body.email,
      password:req.body.psw,
      phone:req.body.phone,
    });
    Newuser.save((err,data)=>{
      if(err){console.log(err);}
      //req.flash('message', 'Registration successfully');
      res.redirect('/');
    })
});

module.exports = router;
