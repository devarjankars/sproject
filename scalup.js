function grab(){
    
    let name=document.getElementById('name').value;
    let mail=document.getElementById('mail').value;
    let age=document.getElementById('Age').value;
    let Obj={
        name,
        mail,
        age
    }
    localStorage.setItem(Obj.mail,JSON.stringify(Obj));
    showobj()
}
    
   

    function showobj(){


    let li =document.createElement('li');
    li.innerHTML

    lo.appendChild(li);
    }
