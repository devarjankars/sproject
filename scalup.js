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
    showobj(Obj)
}
    
   

    function showobj(Obj){

let lo=document.getElementById('itm')
    let li =document.createElement('li');
    li.textContent=Obj.name+ " - "+Obj.mail +"  -" +Obj.age;
    const button=document.createElement('input');
    button.type='del';
    button.value='delete';
    button.onclick=()=>{
        localStorage.removeItem(Obj.mail);
        lo.removeChild(li);
    }

    lo.appendChild(li);
    li.appendChild(button);


    }
