var express = require('express');
//const { response } = require('../app');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
const userHelpers = require('../helpers/user-helper')
/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render('user/view-products',{products});
  })
 
});

router.get('/login',(req,res)=>{
  res.render('user/login')
});

router.get('/signup',(req,res)=>{
  res.render('user/signup')
});

router.post('/signup',(req,res)=>{
  console.log("post working")
  userHelpers.doSignup(req.body,(data)=>{
    console.log(data);
    
  });
});

module.exports = router;