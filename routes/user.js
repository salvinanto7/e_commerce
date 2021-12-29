var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Hrx tee shirt",
      category:"Tshirts",
      description:"Quality stichless tshirts from hrx",
      image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10565552/2020/5/19/aa5e81b6-507f-4679-9ccf-435303a5e6771589896360961-HRX-by-Hrithik-Roshan-Men-Grey-Solid-Rapid-Dry-Training-Tshi-1.jpg"
    },
    {
      name:"Levis' jeans",
      category:"Jeans",
      description:"Color solid jeans from levis",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDNY5qzjDZyTS2_K7HJGU0sYHItcCx2mr9g&usqp=CAU"
    },
    {
      name:"Raymond's suit",
      category:"suit",
      description:"2 piece suit from Raymond's",
      image:"https://www.myraymond.com/media/product/RMDS01814-B8/RMDS01814-B8%20(2).jpg"
    },
    {
      name:"Linen Club shirt",
      category:"Shirt",
      description:"Pure linen shirt from Linen Club",
      image:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/l/c/lcmsf254st04993-g5_1_30a85bb2.jpg?rnd=20200526195200"
    }
  ]
  res.render('index', {products} );
});

module.exports = router;
