"use strict";
var information = document.getElementById("todoinfo");
function storetext() {
    showinfo(information.value);
}
function showinfo(information) {
    let show = document.getElementById('itemlist');
    let currentli = document.getElementById('innerlist');
    let li = currentli === null || currentli === void 0 ? void 0 : currentli.cloneNode(true);
    li.textContent = information;
    show.appendChild(li);
    console.log(li);
}
//# sourceMappingURL=index.js.map