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
    }
    });
}





