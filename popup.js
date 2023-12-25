var open = document.createElement("button");
var b = document.body;
open.innerText = "Baxtiyor Dev";
b.appendChild(open);

var popup_container = document.createElement("div");
popup_container.classList.add("popup-container");
b.appendChild(popup_container);


var popup = document.createElement("div");
popup.classList.add("popup");
popup_container.appendChild(popup);

var close = document.createElement("button");
close.innerText = "X";
popup.appendChild(close);

var h1 = document.createElement("h1");
h1.innerHTML = "Baxtiyor__Dev very beautiful";
popup.appendChild(h1);

var p = document.createElement("p");
p.innerText = "😎Bobomurodov Baxtyior ITtichi!!!😎";
popup.appendChild(p);

open.addEventListener("click", ()=>{
    popup_container.classList.add("active");
});


close.addEventListener("click", ()=>{
    popup_container.classList.remove("active");
});
  

var link = document.createElement("a");

link.innerText = "👍Baxtiyor Devga o'tish akang kuch💪💪💪!!!👍";
link.href = "it class.html"

document.body.appendChild(link);

var link = document.createElement("a");

link.innerText = "💪Jo'ralarimni ismi ko'rsat💪";
link.href = "index.html"

document.body.appendChild(link);

