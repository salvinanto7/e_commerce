var db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')
const { response } = require('express')
//const { USER_COLLECTION } = require('../config/collections')
//const { response } = require('../app')

module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.Password = await bcrypt.hash(userData.Password,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
            })
        })
    },
    doLogin:(userData)=>{
        return new Promise(async (resolve,reject)=>{
            let response ={}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
            console.log(user)
            if(user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if (status){
                        console.log("login success");
                        response.user=user
                        response.status = true
                        resolve(response)
                    }else{
                        console.log("login failed");
                        resolve({status:false})
                    }
                });
            }
        });
    }
}
