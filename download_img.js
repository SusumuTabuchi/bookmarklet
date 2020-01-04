javascript:
function getTitleAndSubTilte()
{
	var title = document.getElementsByClassName("info")[0].getElementsByTagName("h1")[0].innerText;
	var subTitle = document.getElementsByClassName("title")[0].getElementsByTagName("div")[1].innerText;
	return [title, subTitle];
}

function createImageTag(imgUrl, fileName)
{
	/*追加する要素を作成*/
	var atag = document.createElement("a");
	atag.id = "downloadImages" + fileName;
	atag.href = imgUrl;
	atag.download = fileName;
	atag.className = "adddownimgtag";
	atag.innerText = fileName;
	atag.style.cssText = "width: 100px;height: 100px;";
	/*要素を追加*/
	document.getElementById("btn-scale").appendChild(atag);
}

function zeroPadding(num,length)
{
    return ('0000000000' + num).slice(-length);
}



var [title, subTitle] = getTitleAndSubTilte();
subTitle = subTitle.split(" ")[0];
console.log(title);
console.log(subTitle);
var imgList = document.getElementsByClassName("zao-image");
for (let i = 0; i < imgList.length; i++) {
    fileName = zeroPadding(i+1, 3) + ".png";
    var url = imgList[i].getAttribute("src");
    createImageTag(url, fileName);
};
console.log("create image tags.");

var tagList = document.getElementsByClassName("adddownimgtag");
        for (let j = 0; j < tagList.length; j++) {
			/*要素をクリックしてダウンロード開始*/
			setTimeout(
				function () {
					tagList[j].click();
			        console.log(j);
				},
				"1000"
			);
		}