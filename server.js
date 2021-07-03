const express=require('express');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const validator=require('express-validator');
const app=express();
const path=require('path');
const PORT=process.env.PORT || 3000;
const mongoose=require('mongoose');
//taking out the models

app.use(
  session({
    secret:"Surjeet lodhi rajput",
    resave: false,
    saveUninitialized: false,
    })
)
app.use(cookieParser());
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public/'))


//making the routes
const {userRoute}=require('./routes/users/users');
const {postRoute}=require('./routes/posts/posts');
const {commentRoute}=require('./routes/posts/comment')
const { MemoryStore } = require('express-session');
const comments = require('./dbs/comments');
const posts = require('./dbs/posts');
app.use("/posts",postRoute)
app.use('/user',userRoute);
app.use('/comment',commentRoute)
mongoose.connect("mongodb://localhost:27017/enews",(err)=>{
    if(!err){
        console.log("server has been conected to mongodb");
    }
})

var data={top4:[]};
app.get('/',(req,res)=>{

posts.find({}).limit(4).then(dat=>{
   data.top4=dat
   posts.find({category:"Sports"}).limit(3).then(sports=>{
     data.sports=sports;
     posts.find({category:"Environment"}).limit(3).then(en=>{
      data.environment=en
      posts.find({category:"Politics"}).limit(3).then(pol=>{
        data.politics=pol;
        posts.find({category:"Entertainment"}).limit(3).then(ent=>{
          data.entertainment=ent;
          posts.find({category:"National"}).limit(3).then(nat=>{
            data.national=nat;
            posts.find({category:"InterNational"}).limit(3).then(intnat=>{
              data.international=intnat;
 //             console.log(data);
              res.render('index',{data:data,user:req.session.user});
            })
          })
        })
      })
    })
   })
   
 })


})




//listening on the port
app.listen(3000,()=>console.log("Server Start Running on localhost:3000"));



