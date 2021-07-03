const {Router}=require('express');
const comments = require('../../dbs/comments');
const { checkUser } = require('../../middleware/user');
const posts=require('../../dbs/posts')
const route=Router();

route.post("/",checkUser,(req,res)=>{
const comment={
    comment:req.body.comment,
    post:req.body.postid,
    user:req.session.user._id
}

comments.insertMany(comment,(err,data)=>{  
    posts.findOne({_id:req.body.postid}).then(data=>{
        comments.find({post:req.body.postid}).then(comment=>{
            console.log(comment)
            res.render('read_post',{data:data,comments:comment,user:req.session.user})
        
        })
            })
})
})


module.exports={
    commentRoute:route
}