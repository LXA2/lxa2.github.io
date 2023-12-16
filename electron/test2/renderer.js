document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮元素
    var myButton = document.getElementById('bt');

    // 添加点击事件监听器
    myButton.addEventListener('click', function () {
        // 在按钮点击时执行的代码
        alert('Button clicked!');
    });
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('input').addEventListener('input', function () {
    tmp = document.getElementById('input').value;
    window.showAlert('info', ['OK'], 'Alert', tmp);
    console.log("alert");
  });
});

