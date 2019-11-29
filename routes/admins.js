var express = require('express');
var router = express.Router();
var Admin = require('../model/admin.js');
var User = require('../model/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});

router.post('/login',(req,res)=>{
  var user = req.body.user;
  var password = req.body.password;
  Admin.findOne({user:user, password:password}).exec((err,data)=>{
    if(err){console.log(err);}

     if(data){
        req.session.user_id = data._id;
        res.redirect('/admin/list_user');
      }else{
        res.send('Please Enter valid user')
      }
  })

});


router.get('/adduser', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
    var Newuser = new User({
      name:req.body.name,
      email:req.body.email,
      password:req.body.psw,
      phone:req.body.phone,
    });
    Newuser.save((err,data)=>{
      if(err){console.log(err);}
      //req.flash('message', 'Registration successfully');
      res.redirect('/admin/list_user');
    })
});

router.get('/list_user',(req,res)=>{

  User.find({}).exec((err,data)=>{
    res.render('list', { data: data });
  });
});

router.get('/user/edit/:id',(req,res)=>{

  User.findOne({_id:req.param('id')}).exec((err,data)=>{
    res.render('edit', { data: data });
  });
});

router.post('/user/edit/:id',(req,res)=>{
    var detail = {
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      phone:req.body.phone,
    }
  User.updateOne({_id:req.param('id')},detail).exec((err,data)=>{
    res.redirect('/admin/list_user');
  });
});
router.get('/user/delete/:id',(req,res)=>{

  User.deleteOne({ _id: req.param('id') }, function (err) {
    res.redirect('/admin/list_user');
  })
});

router.get('/logout',(req,res)=>{
  req.session.user_id = '';
  res.redirect('/admin/')

});

module.exports = router;
