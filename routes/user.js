var express = require('express');
const carsHelpers = require('../helpers/cars-helpers');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {

  carsHelpers.getAllCars().then((products)=>{
    console.log(products)
   res.render('user/view-proudects',{admin:true,products});
   })

});

module.exports = router;
