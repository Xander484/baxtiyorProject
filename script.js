const text = "❤️❤️Men JavaScriptni va cssni yaxshi ko'raman!!!💜💜";

var h1 = document.createElement("h1");
document.body.appendChild(h1);

let index = 0;

setInterval(() => {
    h1.innerText = text.slice(0,index);
    index++;

    
    if(index>text.length){
        index = 0;
    }

}, 100);

var link = document.createElement("a");

link.innerText = "🏓🏓🏓Bobomurodov Baxtyior ITtichiga o'tish!!!🏓🏓🏓";
link.href = "popup.html"

document.body.appendChild(link);