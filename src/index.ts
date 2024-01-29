var  information =  document.getElementById("todoinfo") as HTMLInputElement

function storetext(): string  | void{
    

    showinfo(information.value)
    
}
function showinfo(information: string): void {
    let show = document.getElementById('itemlist') as HTMLDataListElement
    let currentli = document.getElementById('innerlist');
    let circleicon = document.createElement('i')
    let trashicon = document.createElement('i')
    let Span = document.createElement('span')
    let li = currentli?.cloneNode(true) as HTMLLIElement;
    
     li.innerText = information;
        
    
        show.appendChild(li);
       circleicon.className = 'fa fa-circle text-red-600'
       trashicon.className = 'fa-solid fa-trash cursor-pointer hover:text-red-600'
       li.insertBefore(Span, li.firstChild);
       Span.append(circleicon)
       li.appendChild(trashicon)
    
}