var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

 var products = [
    {
      no:"1",
      name:"GT3 RS",
      color:'white',
      company:'Porsche',
      price:'78,00,000 L',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrL3uy25QFitUoTdpHPlvUtKwE_VwGIZUjQ&s"
    },
    {
      no:"2",
      name:"Hybrid SF90",
      color:'yellow',
      company:'Ferrari',
      price:'80,00,000 L',
      image:'https://etimg.etb2bimg.com/photo/101380711.cms'

    },
    {
      no:"3",
      name:'Continental GTS',
      color:'light gray',
      company:'Bentley',
      price:'2,00,00,000C',
      image:'https://www.topgear.com/sites/default/files/2023/03/Continental%20GT%20and%20GTC%20S%20-%201.jpg?w=892&h=502'
    },
    {
      no:"4",
      name:'SRT Super Challenger',
      color:'green',
      company:'Dodge',
      price:'90,00,000L',
      image:'https://www.motortrend.com/uploads/2023/05/001-2023-dodge-super-stock-f8-green.jpg?w=768&width=768&q=75&format=webp'
        }
  ]
  res.render('index', { products});
});

module.exports = router;
