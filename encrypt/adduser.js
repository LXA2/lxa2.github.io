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

function adduser(a){
    switch (a) {
        case 1:
            strength=0;
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
        <button onclick="addUser(2);" style="font-size: 1.2em;margin: auto;margin-left: 4em;margin-bottom: 0.5em;">确定</button>`
            break;
    
        case 2:
            if (document.getElementById("userName").) {
                if (strength!=0) {
                    user[`${user.length+1}`]=Object();
                    user[`${user.length}`][]
                    document.getElementById("addUserQuery").innerHTML="";
                } else {
                    alert("请选择加密强度");
                }
            }else{
                alert("用户名不能为空");
            }
            break;
    }
}