var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var fs = require('fs'); 

var productHelper = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {

  productHelper.getAllProducts().then((products)=>{
    res.render('admin/view-admin-products',{admin:true,products})
  })
  //res.render('admin/view-admin-products',{admin:true,products})
});

router.get('/add-products',(req,res)=>{
  res.render('admin/add-products',{admin:true});
});

router.post('/add-products',(req,res)=>{
  //console.log(req.body);
  //console.log(req.files.image);

  productHelper.addProduct(req.body,(id)=>{
    let image = req.files.image;
    console.log(image)
    
    fs.writeFile("./public/product-images/"+id+'.jpg', image.data, 'binary', function(err) { 
      console.log("The file was saved!"); 
  });
    
    //image.mv('./public/product-images'+id+'.jpg',(err,done)=>{
    //  if (!err){
    //    res.render('/admin');
    //  }else{
    //    console.log(err);
    //  }
    //})
    res.render('admin/add-products',{admin:true});
  });
});
module.exports = router;
  