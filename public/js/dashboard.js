const leftPane=document.querySelector('.left-pane');
const checkBox=document.querySelector('.left-check');
var visibility="hidden";
function updateLeftPane(){
if(window.innerWidth>1000){
if(visibility=='hidden'){
   visibility="visible";
   leftPane.style="visibility:visible";
   document.querySelector('.cross').innerHTML="<span></span><span></span><span></span>";
   document.querySelector('.cross').setAttribute('class','sidebar');
 
   document.querySelector('.right-pane').style="width:100%";
   document.querySelector('.left-pane').style="margin-left:-700px;";
}
else if(visibility=='visible'){
    visibility="hidden";
   leftPane.style="visibility:hidden";
   document.querySelector('.sidebar').innerHTML="X";
   document.querySelector('.sidebar').setAttribute('class','cross');
 
   document.querySelector('.right-pane').style="width:80%";
   document.querySelector('.left-pane').style="margin-left:0;";
}
}
if(window.innerWidth<1000){
   if(visibility=='hidden'){
      visibility="visible";
      leftPane.style="visibility:visible";
      document.querySelector('.cross').innerHTML="<span></span><span></span><span></span>";
      document.querySelector('.cross').setAttribute('class','sidebar');
    
      document.querySelector('.right-pane').style="width:100%;";
    
      document.querySelector('.left-pane').style="margin-left:-700px;";
   }
   else if(visibility=='visible'){
       visibility="hidden";
      leftPane.style="visibility:hidden";
      document.querySelector('.sidebar').innerHTML="X";
      document.querySelector('.sidebar').setAttribute('class','cross');
    
      document.querySelector('.right-pane').style="width:40%";
      document.querySelector('.left-pane').style="margin-left:0;";
   }
   }

}

window.addEventListener('resize',updateLeftPane);

function showDeletList(e){
   e.preventDefault();
   document.querySelector('.list-group').style="margin-top:180px";
   document.getElementById('post-form').style="margin-top:-700px"
}
function showCreatePost(){
   e.preventDefault();
   document.querySelector('.list-group').style="margin-top:-100pxpx";
   document.getElementById('post-form').style="margin-top:30px"
   
}
document.getElementById('postdelete').addEventListener('click',showDeletList)
document.getElementById('createpost').addEventListener('click',showCreatePost)