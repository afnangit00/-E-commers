var db=require('../config/connection');
var collection = require('../config/collections');
module.exports={
        addCars:(product,callback)=>{
                db.get().collection('cars').insertOne(product).then((data)=>{
                        console.log(data)
                        callback(data.ops[0]._id)

                })
        },
        getAllCars:()=>{
                return new Promise(async(resolve,reject)=>{
                        let carsroom= await db.get().collection(collection.CARS_COLLECTION).find().toArray()
                        resolve(carsroom)
                        
                })
        }
}