function video(){
    document.getElementById("bd").innerHTML="hahahahahahahahaha";
}
function iframe() {
  url="https://space.bilibili.com/347050218";
  var bodyElement = document.getElementById("bd");
  bodyElement.innerHTML = "<div class='title'>KHLNB</div><div class='title2'>孔皓霖牛逼!!!!!!</div>";
  
  var iframeElement = document.createElement("iframe");
  iframeElement.style.border = "none";  // 设置iframe无边框
  iframeElement.style.position = "fixed";
  iframeElement.style.top = "0";
  iframeElement.style.left = "0";
  iframeElement.style.width = "100%";
  iframeElement.style.height = "100%";
  iframeElement.src = url;  // 设置iframe的URL
  
  bodyElement.appendChild(iframeElement);  // 将iframe添加到body元素中
}
