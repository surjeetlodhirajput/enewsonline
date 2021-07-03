const mongoose=require('mongoose');
const Schema=mongoose.Schema;

module.exports=mongoose.model('Users',Schema({
    _id:Schema.Types.ObjectId,
    username:{
    type:String,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

}))