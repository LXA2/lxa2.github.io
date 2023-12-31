function video(){
    document.getElementById("bd").innerHTML="hahahahahahahahaha";
}
function iframe() {
  url="https://space.bilibili.com/539071817";
  var bodyElement = document.getElementById("bd");
  bodyElement.innerHTML = "<div class='title3'>CYD</div><div class='title4'>ZJW!!!!!!</div>"; 
  var iframeElement = document.createElement("iframe");
  iframeElement.style.border = "none"; 
  iframeElement.style.position = "fixed";
  iframeElement.style.top = "0";
  iframeElement.style.left = "0";
  iframeElement.style.width = "100%";
  iframeElement.style.height = "100%";
  iframeElement.src = url;  
  
  bodyElement.appendChild(iframeElement); 
}
