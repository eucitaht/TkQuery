/**
 * Created by Administrator on 14-6-25.
 */
/**
* @type {Object} btn颜色 尺寸 数组
*/
var classNames ={
  TkBtn_Green:
    {"background":"#32cd32"},
  TkBtn_Red:
    {"background":"#ff0000"},
  Tkbtn_Blue:
    {"background":"#0000cd"},
  Tkbtn_Big:
    {"width":"70px","height":"35px"},
  Tkbtn_Normal:
    {"width":"55px","height":"25px"},
  Tkbtn_Small:
    {"width":"40px","height":"15px"}
};
/**
* @type {Object} 框架支持的html元素类型
*/
var htmlTypes = {
  "button":true,
  "input[type=button]":true,
  "input[type=submit]":true
};
/**
* 设置btn颜色
* @param className 颜色class
* @param domType dom类型
* @constructor function Object(){....}
*/
var TkBtnSet = function(button,cns,htmlType){
   this.className=[];
   //加入所有class属性
   // htmlTypes[htmlType]?this.htmlType=htmlType:"";
   for(var i=0;i<cns.length;i++){
     if(classNames[cns[i]].color)
       button.style.color = classNames[cns[i]].color;
     if(classNames[cns[i]].background)
       button.style.background = classNames[cns[i]].background;
     if(classNames[cns[i]].width)
       button.style.width =classNames[cns[i]].width;
     if(classNames[cns[i]].height)
       button.style.height = classNames[cns[i]].height;
   }
   //如果使用new 实例化当前对象 则默认返回this; 否则返回undefined
   //如果不用new 则失去了prototype 以及上级原型链
}

window.onload=function(){
    console.log(111);
    var inputs = window.document.getElementsByTagName("input");
    for(var i = 0;i<inputs.length;i++){
       new TkBtnSet(inputs[i],inputs[i].className.split(" "),inputs[i].type);
    };
    var buttons = window.document.getElementsByTagName("button");
    for(var i = 0;i<buttons.length;i++){
       new TkBtnSet(buttons[i],buttons[i].className.split(" "),buttons[i].type);
    };
}
