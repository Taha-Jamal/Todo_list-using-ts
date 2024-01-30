var information = document.getElementById("todoinfo") as HTMLInputElement;

function storetext(): string | void {
  showinfo(information.value);
}
function showinfo(information: string): void {
  let show = document.getElementById("itemlist") as HTMLDataListElement;
  // let currentli = document.getElementById('innerlist');
  let circleicon = document.createElement("i");
  let trashicon = document.createElement("i");
  let Li = document.createElement("li");
  let todoDiv = document.createElement("div");
  let Span = document.createElement("span");
  circleicon.className = "fa fa-circle text-red-600";
  todoDiv.className = "text-white";
  trashicon.className = "fa-solid fa-trash cursor-pointer hover:text-red-600";
  Li.className =
    "border-2 rounded-full  h-10 text-white flex justify-between items-center px-2";
  Span.className = "text-white lowercase";
  // let li = currentli?.cloneNode(true) as HTMLLIElement;
  Li.append(todoDiv);

  todoDiv.appendChild(circleicon)
  todoDiv.appendChild(Span)
//   Span.append(circleicon);
  Span.innerText = information;
  Li.appendChild(trashicon);
  show.appendChild(Li);

  trashicon.addEventListener("click", function () {
    show.removeChild(Li);
  });
}
