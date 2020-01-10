/**
 * Created by Administrator on 2018/3/27 0027.
 */
var xbtBox=document.getElementById("xbtBox");
var two=document.getElementById("two");
var img=two.getElementsByTagName("img");
var div=xbtBox.getElementsByTagName("div");

function change(i){
    for(var j=0;j<img.length;j++){
        if(i==j){
            img[j].className="opc"
        }else{
            img[j].className=""
        }
    }
}