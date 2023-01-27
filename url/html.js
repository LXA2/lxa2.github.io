
function show1() {
	document.getElementById("body").innerHTML=`	
    <div class="main">
        <h2>此处输入URL:</h2>
        <textarea id="textarea" class="textarea" rows="2" oninput="url(this.value);"></textarea>
        <div class="result">
            <h3>结果：</h3>
            <textarea id="res1" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
            <button onclick="copy1();">点击复制</button>
            <h3>二维码：</h3>
            <div id="qr1"></div>
        </div>
    </div>
    <hr style="margin-top: 3em;">
    <div class="main">
        <h2 style="margin-top: 3em;">此处输入文本:</h2>
        <textarea id="textarea2" class="textarea2" rows="5" oninput="text(this.value);"></textarea>
        <div class="result2">
            <h3>结果：</h3>
            <textarea id="res2" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
            <button onclick="copy2();">点击复制</button>
            <h3>二维码：</h3>
            <div id="qr2"></div>
        </div>
    </div>`;
}
function show2() {
	document.getElementById("body").innerHTML=`	<div class="main1">
		<p id="p"></p>
	</div>
    <div class="main">
        <h2>此处输入URL:</h2>
        <textarea id="textarea" class="textarea" rows="2" oninput="url(this.value);"></textarea>
        <div class="result">
            <h3>结果：</h3>
            <textarea id="res1" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
            <button onclick="copy1();">点击复制</button>
            <h3>二维码：</h3>
            <div id="qr1"></div>
        </div>
    </div>
    <hr style="margin-top: 3em;">
    <div class="main">
        <h2 style="margin-top: 3em;">此处输入文本:</h2>
        <textarea id="textarea2" class="textarea2" rows="5" oninput="text(this.value);"></textarea>
        <div class="result2">
            <h3>结果：</h3>
            <textarea id="res2" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
            <button onclick="copy2();">点击复制</button>
            <h3>二维码：</h3>
            <div id="qr2"></div>
        </div>
    </div>`;
}
function show3() {
	document.getElementById("body").innerHTML=`	<div class="main1">
		<p id="p"></p>
	</div>`
}