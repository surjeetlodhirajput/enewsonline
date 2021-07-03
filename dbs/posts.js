const mongoose=require('mongoose');
const Schema=mongoose.Schema;

module.exports=mongoose.model('Posts',Schema({
    _id:Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String
    },
    user:{
        required:true,
        type:Schema.Types.ObjectId,
        ref:'Users'
    }
}))