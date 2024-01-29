var  information =  document.getElementById("todoinfo") as HTMLInputElement

function storetext(): string  | void{
    

    showinfo(information.value)
    
}
function showinfo(information: string): void {
    let show = document.getElementById('itemlist') as HTMLDataListElement
    // let circle:any = document.getElementsByClassName('fa fa-circle') 
    let currentli = document.getElementById('innerlist');
    // let beforeicon = document.createElement('i')
    let li = currentli?.cloneNode(true) as HTMLLIElement;
    //  beforeicon = circle.item
     li.textContent = information;
        
    
        show.appendChild(li);
        //  show.appendChild(circle)
        
    
}










