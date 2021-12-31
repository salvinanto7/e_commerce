var db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')
//const { USER_COLLECTION } = require('../config/collections')
//const { response } = require('../app')

module.exports={
    doSignup:async(userData,callback)=>{
            userData.Password = await bcrypt.hash(userData.Password,10);
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{

                console.log(data)
                callback(data.insertedId.toString())
            
            })      
        
   }
}