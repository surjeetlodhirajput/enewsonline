const mongoose=require('mongoose');
const Schema=mongoose.Schema;

module.exports=mongoose.model('Comments',Schema({
    _id:Schema.Types.ObjectId,
    comment:{
        type:String,
        required:true
    },
    post:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Posts"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users"
    }
}))