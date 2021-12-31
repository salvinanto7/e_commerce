var db = require('../config/connection')
var dbcollections = require('../config/collections')
module.exports={
    addProduct:(product,callback)=>{
        console.log(product);
        db.get().collection(dbcollections.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            //console.log("check data")
            //console.log(data.insertedId.toString())
            callback(data.insertedId.toString())
        })
    },

    getAllProducts:()=>{
        return new Promise(async(resolve, reject)=>{
            let products = await db.get().collection(dbcollections.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}