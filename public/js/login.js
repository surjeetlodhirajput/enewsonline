var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

function login(){
    x.style.visibility="visible"
    y.style.visibility="hidden";
    z.style.left="0px";
}
function register(){
   
x.style.visibility="hidden";
y.style.visibility="visible";
z.style.left="110px";
}