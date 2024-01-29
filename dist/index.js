"use strict";
var information = document.getElementById("todoinfo");
function storetext() {
    showinfo(information.value);
}
function showinfo(information) {
    let show = document.getElementById('itemlist');
    let currentli = document.getElementById('innerlist');
    let circleicon = document.createElement('i');
    let trashicon = document.createElement('i');
    let Span = document.createElement('span');
    let li = currentli === null || currentli === void 0 ? void 0 : currentli.cloneNode(true);
    li.innerText = information;
    show.appendChild(li);
    circleicon.className = 'fa fa-circle text-red-600';
    trashicon.className = 'fa-solid fa-trash cursor-pointer hover:text-red-600';
    li.insertBefore(Span, li.firstChild);
    Span.append(circleicon);
    li.appendChild(trashicon);
    trashicon.addEventListener('click', function () {
        show.removeChild(li);
    });
}
//# sourceMappingURL=index.js.map