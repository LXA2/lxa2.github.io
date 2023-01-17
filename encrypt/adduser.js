var strength=0;
let user=Object();
if (localStorage.getItem("encryptUser")==null) {
    user.u1=Object();
    user.u1.name="默认用户"+new Date().getUTCDate;
    user.u1.strength=2;
    alert("aaa")
    localStorage.setItem("encryptUser",JSON.stringify(user));
} else {
    user=JSON.parse(localStorage.getItem("encryptUser"));
    console.log(user);
}
document.getElementById("addUserQuery").style.display="none";
function addUser(a){
    switch (a) {
        case 1:
            strength=0;
            document.getElementById("addUserQuery").style.display="block";
            document.getElementById("addUserQuery").innerHTML=`<p>
            用户名称
        </p>
        <input type="text" id="userName" style="height: 1.5em;width: 30em;font-size: 0.8em;" value="">
        <hr>
        <p>
            加密强度（强加密运算时间可能过长）
        </p>
        <input type="radio" name="encryptStrength" style="zoom: 150%;" onclick="strength=1">
        弱
        <div></div>
        <input type="radio" name="encryptStrength" style="zoom: 150%;" onclick="strength=2">
        中
        <div></div>
        <input type="radio" name="encryptStrength" style="zoom: 150%;" onclick="strength=3">
        强
        <div></div>
        <hr>
        <button onclick="addUser(2);" style="font-size: 1.2em;margin: auto;margin-left: 4em;margin-bottom: 0.5em;">确定</button>
        <button onclick="addUser(3);" style="font-size: 1.2em;margin: auto;margin-left: 8em;margin-bottom: 0.5em;">关闭</button>`;
            break;
    
        case 2:
            var a=document.getElementById("userName").value;
            if (a.length!=0) {
                if (strength!=0) {
                    document.getElementById("addUserQuery").style.display="none";
                    user[`${user.length+1}`]=Object();
                    user[`${user.length}`].name=a;
                    user[`${user.length}`].strength=strength;
                    document.getElementById("addUserQuery").innerHTML="";
                    alert("添加成功");
                } else {
                    alert("请选择加密强度");
                }
            }else{
                alert("用户名不能为空");
            }
            break;
        case 3:
            document.getElementById("addUserQuery").style.display="none";
            document.getElementById("addUserQuery").innerHTML="";
            break;
    }
}