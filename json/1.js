function gen1(){
    document.getElementById('res1').innerHTML="";
    new QRCode(document.getElementById('res1'),window.btoa(`{"cardNo":"${document.getElementById('input1').value}","timeStamp":${Number(Date.parse(`${document.getElementById('input2').value} 10:00`).toString().slice(0,10))}}`))
}