"use strict";
var information = document.getElementById("todoinfo");
function storetext() {
    showinfo(information.value);
}
function showinfo(information) {
    let show = document.getElementById('itemlist');
    let circleicon = document.createElement('i');
    let trashicon = document.createElement('i');
    let Li = document.createElement('li');
    let Span = document.createElement('span');
    circleicon.className = 'fa fa-circle text-red-600';
    trashicon.className = 'fa-solid fa-trash cursor-pointer hover:text-red-600';
    Li.className = 'border-2 rounded-full  h-10 text-white flex justify-between items-center px-2';
    Span.className = 'text-white lowercase';
    Span.textContent = information;
    Li.appendChild(Span);
    Li.appendChild(trashicon);
    show.appendChild(Li);
    Span.append(circleicon);
    trashicon.addEventListener('click', function () {
        show.removeChild(Li);
    });
}
//# sourceMappingURL=index.js.map