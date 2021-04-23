window.onload=function() {
    
    setInterval("document.getElementById('time').innerHTML='北京时间:'+new Date().toLocaleString();", 1000);
}
var xmlhttp;
function loadajax(url,func){
    if(window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //适应不同版本浏览器
    xmlhttp.open("get",url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=func;
}
function getData(){
    loadajax("/test/test.xml?t="+Math.random(),function()
    {
    if(xmlhttp.readyState==4&&xmlhttp.status==200)
    {
    var data=xmlhttp.responseXML;
    var i;
    var table="<tr><th>name</th><th>from</th></tr>";
    var x=data.getElementsByTagName("id");
    for(i=0;i<x.length;i++)
    {
        table += "<tr><td>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+
        "</td><td>" + x[i].getElementsByTagName("from")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("ajaxdata").innerHTML=table;
    //document.getElementById("ssnr").value="请输入"/修改input内容
    }
    });
}
window.addEventListener("load",function(){
    var left=document.querySelector(".left")
    var right=document.querySelector(".right")
    var lbt=document.querySelector(".lbt")
    var ul=document.querySelector(".lbt ul")
    var ol=document.querySelector(".yd")
    // 点击右按钮，图片滚动一张
    var num = 0;
	 // circle 控制小圆圈的播放
	var circle = 0;
    var lbtwidth=lbt.offsetWidth;
    for(var i=0;i<ul.children.length; i++){
        var li=document.createElement("li");
        li.setAttribute("index",i)
        ol.appendChild(li);
        li.addEventListener("click",function(){
        for(var i=0;i<ol.children.length; i++){
            ol.children[i].className =" ";
        }
        this.className="xz";
        var index=this.getAttribute("index");
        num=index ;
        circle=index;
        animate(ul,-index * lbtwidth);
    })
    }
    ol.children[0].className = "xz";
	right.addEventListener('click',function(){
		if(num == ul.children.length-1){
			ul.style.left = 0;
			num = 0;
		}
		num++;
		animate(ul, -num*lbtwidth);
		circle++;
		if (circle == ol.children.length) {
			circle = 0;
		}
		for (var i = 0; i < ol.children.length; i++) {
		    ol.children[i].className = '';
		}
		ol.children[circle].className = 'xz';
	})
    left.addEventListener('click',function(){
		if(num == 0){
			num = ul.children.length;
            ul.style.left = -num * lbtwidth+"px";
		}
		num--;
		animate(ul, -num*lbtwidth);
		circle--;
		if (circle <0) {
			circle = ol.children.length-1;
		}
		for (var i = 0; i < ol.children.length; i++) {
		    ol.children[i].className = '';
		}
		ol.children[circle].className = 'xz';
	})
    timer = setInterval(function() {
        //手动调用点击事件
        right.click();
    }, 2000);
    //鼠标经过显示左右按钮
	lbt.addEventListener('mouseenter',function(){
		left.style.display = 'block';
		right.style.display = 'block';
		clearInterval(timer);
		timer = null; // 清除定时器变量
	})
    //鼠标离开隐藏左右按钮
	lbt.addEventListener('mouseleave',function(){
		left.style.display = 'none';
		right.style.display = 'none';
		timer = setInterval(function() {
			//手动调用点击事件
			right.click();
		}, 2000);
	})
    
})




