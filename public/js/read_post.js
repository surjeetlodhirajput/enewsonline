function changeSize(){
    const height=window.innerHeight;
    const width=window.innerWidth;
    let calWidth=width-(width/10);
    let calHeight=height/2+40;
    const image=document.querySelector('.imge');
   image.style="width:"+calWidth+"px;height:"+calHeight+"px;"
   document.querySelector('.imageTop').style.width=calWidth-10;
}
setTimeout(changeSize,100);