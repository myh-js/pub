function emailcheck(){
    var x=document.forms["dlform"]["zh"].value;
    if(!/^\d+$/.test(x)){
     alert("账号应为数字");
    }
    var y=document.forms["dlform"]["mm"].value;
    if(!/^[a-zA-Z]{1,}/.test(y))
    {
        alert("密码首位应为字母")
    }
}