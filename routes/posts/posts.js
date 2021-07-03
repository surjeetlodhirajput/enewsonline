const { render } = require('ejs');
const {Router}=require('express');
const route=Router();
const posts=require('../../dbs/posts')
const {checkUser}=require('../../middleware/user')
const mullter=require('multer');
const comments = require('../../dbs/comments');
const storage=mullter.diskStorage({
    destination:"./public/images/",
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})
const upload=mullter({storage:storage })

route.get("/",(req,res)=>{

})
route.get("/category",(req,res)=>{
    posts.find({category:req.query.q}).then(data=>{
        res.render('category',{data:data,category:req.query.q})
    })
})

route.post("/write",checkUser,upload.single('cover'),(req,res)=>{
    const pos={

        title:req.body.title,
        body:req.body.description,
        category:req.body.selected,
        thumbnail:req.file.filename,
        user:req.session.user._id
    }
posts.insertMany(pos,(err,data)=>{
    if(data){
        console.log('done')
    }
    else{
        console.log(err);
    }
})    
    
    res.redirect('/posts/dashboard')

})

route.get("/dashboard",checkUser,(req,res)=>{
posts.find({user:req.session.user._id}).then(data=>{
    res.render("write_post",{data:data})
})  
//res.redirect("/")
})


route.get("/readPost/:id?",(req,res)=>{
    const id=req.params.id;
    posts.findOne({_id:id}).then(data=>{
comments.find({post:id}).then(comment=>{
    console.log(comment)
    res.render('read_post',{data:data,comments:comment,user:req.session.user})

})
    }).catch(err=>{
        res.redirect("/")
    })
})
route.get("/delete/",(req,res)=>{
const postid=req.query.postid
console.log(postid)
posts.deleteOne({_id:postid}).then(data=>console.log(data)).catch(err=>console.log(err))
posts.find({user:req.session.user._id}).then(data=>{
    res.render("write_post",{data:data})
})
})
route.get('/category/:cat?',(req,res)=>{
    const cat=req.params.cat
    posts.find({category:cat}).then(data=>{
        res.render('category',{data:data})
    })
})
module.exports={
    postRoute:route
}