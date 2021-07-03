
function checkUser(req,res,next){
    if(req.session.user){
        next();
    }
    else{
        console.log("Please Login To Create Post");
        res.redirect("/");
    }
    }
    
    module.exports={
        checkUser
    }