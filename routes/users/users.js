const {Router}=require('express');
const { find } = require('../../dbs/users');
const route=Router();
const Users=require('../../dbs/users');
//redirecting when we get the get request on this 
route.get("/login/",(req,res)=>{
    res.render('login_register',{err:"",msg:""})
})
route.get("/register/",(req,res)=>{
    res.redirect("/");
})
// end
//make it right it is not working corcetly
route.post("/login/",(req,res)=>{
    Users.findOne({$and:[{email:req.body.email},{password:req.body.password}]},function(err,data){ 
    if(data){
        req.session.user=data;
        res.cookie('email',data.email,{maxAge:(1000*60*60*12)});
        res.status(200).redirect("/")
    }
    else{

        res.status(500).render('login_register',{err:"crededentials are  wrong",msg:"danger"})
    }

});

 
})
route.post('/register/',(req,res)=>{
const user={username:req.body.username,email:req.body.email,password:req.body.password}
Users.find({email:req.body.email},function(err,data){
    console.log(data)  
    if(data==''){
        
        Users.insertMany(user,(err,data)=>{
            if(data){
                res.status(200).render('login_register',{err:"Hurry! You have been registered",msg:"succ"})
            }
            else {
        
                res.status(500).render('login_register',{err:"Something went wrong",msg:"danger"})
            }
        })
    }
    else{
        res.status(500).render('login_register',{err:"Email Already Existed",msg:"danger"})      
        
    }
})

})

route.get("/logout/",(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})
module.exports={
    userRoute:route
}