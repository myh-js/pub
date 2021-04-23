function init(){
    document.getElementById("bg").style.height=window.innerHeight+"px";
}
function checkzh() {
    let i=document.forms["dlform"]["zh"].value;
    if(!/^\d+$/.test(i)){
     document.getElementById("tip").innerHTML="账号应为数字!";
     document.getElementById("zh").style.borderColor="red";
    }
    else{
        document.getElementById("tip").innerHTML=" ";
        document.getElementById("zh").style.borderColor="transparent"; 
    }
}
function checkmm() {
    let i=document.forms["dlform"]["mm"].value;
    if(!/^[a-zA-Z]{1,}/.test(i)){
     document.getElementById("tip").innerHTML="密码首位应为字母!";
     document.getElementById("mm").style.borderColor="red";
    }
    else{
        document.getElementById("tip").innerHTML=" " 
        document.getElementById("mm").style.borderColor="transparent";
    }
}
function formcheck() {
    var x=document.forms["dlform"]["zh"].value;
    if(!/^\d+$/.test(x)){
     alert("账号应为数字");
     return false;
    }
    var y=document.forms["dlform"]["mm"].value;
    if(!/^[a-zA-Z]{1,}/.test(y))
    {
        alert("密码首位应为字母")
        return false;
    }
}