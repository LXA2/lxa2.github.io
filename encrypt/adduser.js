var strength=0;
let user=Object();//          用户名
let userStrength=Object();//  用户加密强度
let userPrivateKey=Object();//用户私钥
let userPublicKey=Object();// 用户公钥
var userNum=0;//              用户数
if (localStorage.getItem("encryptUser")==null) {
    user.u1=`默认用户${new Date().getTime()}`;
    userStrength.u1=2;
    userPrivateKey.u1=generatePrivateKey(2);
    document.getElementById("pcPubKeyCopy").value=e;
    userPublicKey.u1=e;
    userNum=1;
    localStorage.setItem("encryptUser",JSON.stringify(user));
    localStorage.setItem("encryptUserStrength",JSON.stringify(userStrength));
    localStorage.setItem("encryptUserPrivateKey",JSON.stringify(userPrivateKey));
    localStorage.setItem("encryptUserPublicKey",JSON.stringify(userPublicKey));
} else {
    user=JSON.parse(localStorage.getItem("encryptUser"));
    userStrength=JSON.parse(localStorage.getItem("encryptUserStrength"));
    userPrivateKey=JSON.parse(localStorage.getItem("encryptUserPrivateKey"));
    userPublicKey=JSON.parse(localStorage.getItem("encryptUserPublicKey"));
    userNum=Object.keys(user).length;
    document.getElementById("pcPubKeyCopy").value=userPublicKey.u1;
    console.log(user);
}//读取localstorage  ，  设置默认用户
function store(){//保存数据
    localStorage.setItem("encryptUser",JSON.stringify(user));
    localStorage.setItem("encryptUserStrength",JSON.stringify(userStrength));
    localStorage.setItem("encryptUserPrivateKey",JSON.stringify(userPrivateKey));
    localStorage.setItem("encryptUserPublicKey",JSON.stringify(userPublicKey));
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
                    userNum++;
                    user[`u${userNum}`]=a;
                    userStrength[`u${userNum}`]=strength;
                    userPrivateKey[`u${userNum}`]=generatePrivateKey(strength);
                    userPublicKey[`u${userNum}`]=e;
                    document.getElementById("addUserQuery").innerHTML="";
                    store();
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