javascript:
function saveCanvas(canvas, file_name)
{
	var canvas = canvas;
	var a = document.createElement('a');
	a.href = canvas.toDataURL();
	a.download = file_name;
	a.click();
}

function zeroPadding(num,length)
{
    return ('0000000000' + num).slice(-length);
}

var canvasList = document.getElementsByTagName("canvas");
for (let i = 0; i < canvasList.length; i++) {
    fileName = zeroPadding(i+1, 3) + ".png";
    saveCanvas(canvasList[i], fileName);
};