var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
      item:"#123785",
      name:"Hrx tee shirt",
      category:"Tshirts",
      description:"Quality stichless tshirts from hrx",
      image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10565552/2020/5/19/aa5e81b6-507f-4679-9ccf-435303a5e6771589896360961-HRX-by-Hrithik-Roshan-Men-Grey-Solid-Rapid-Dry-Training-Tshi-1.jpg"
    },
    {
      item:"#1235656",
      name:"Levis' jeans",
      category:"Jeans",
      description:"Color solid jeans from levis",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDNY5qzjDZyTS2_K7HJGU0sYHItcCx2mr9g&usqp=CAU"
    },
    {
      item:"#12374645",
      name:"Raymond's suit",
      category:"suit",
      description:"2 piece suit from Raymond's",
      image:"https://www.myraymond.com/media/product/RMDS01814-B8/RMDS01814-B8%20(2).jpg"
    },
    {
      item:"#1234534",
      name:"Linen Club shirt",
      category:"Shirt",
      description:"Pure linen shirt from Linen Club",
      image:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/l/c/lcmsf254st04993-g5_1_30a85bb2.jpg?rnd=20200526195200"
    }
  ]
  res.render('admin/view-admin-products',{admin:true,products})
});

router.get('/add-products',(req,res)=>{
  res.render('admin/add-products',{admin:true});
});

router.post('/add-products',(req,res)=>{
  console.log(req.body);
  console.log(req.files);
});
module.exports = router;
  