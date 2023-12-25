const text = "❤️❤️My friends name is Mirfayz,Amirxon,Saidbek and me❤️❤️"

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

