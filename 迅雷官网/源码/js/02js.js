/**
 * Created by Administrator on 2018/3/27 0027.
 */
var imgBox=document.getElementById("imgBox");
var img=imgBox.getElementsByTagName("img");
var circle=document.getElementById("circle");
var list=circle.getElementsByTagName("li");
var prev=document.getElementById("prev");
var next=document.getElementById("next");

//点击点 切换图片
function change(i){
    //j   0 1 2 3
    for(var j=0;j<img.length;j++){
        if(i==j){
            img[j].style.display="block";
            list[j].className="active";
        }else{
            img[j].style.display="none";
            list[j].className="";
        }
    }
}

//点击按钮

function qiehuan(move){
    //开始                   0
    //点击一下             0+1226
    //点击一下            1226+1226
    var newJl=parseInt(imgBox.style.left)+move;   //number类型
    imgBox.style.left=newJl+"px";
   if(newJl<-3678){
        imgBox.style.left=0+"px";
    }
    if(newJl>0){
        imgBox.style.left=-3678+"px";
    }
}

next.onclick=function(){
    qiehuan(-1226);
};
prev.onclick=function(){
    qiehuan(1226);
}
