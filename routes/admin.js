var express = require('express');
var router = express.Router();
const {render} = require('../app')
var carsHelpers = require('../helpers/cars-helpers');

/* GET users listing. */
router.get('/', function(req, res, next) {
 carsHelpers.getAllCars().then((products)=>{
  console.log(products)
 res.render('admin/view-products',{admin:true,products});
 })
 
});

router.get('/add-products',(req,res)=>{
  res.render('admin/add-products');

})
router.post('/add-products',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);


  carsHelpers.addCars(req.body,(_id)=>{
    let image=req.files.Image
    console.log(_id)
    image.mv('./public/cars-pics/'+_id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-products')
      }else{
        console.log(err)
      }
    })
    res.render('admin/add-products')
  })

})



module.exports = router;
