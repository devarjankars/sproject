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

        const lo=document.getElementById('itm');
  //  let li =document.createElement('li');
     lo.innerHTML=  lo.innerHTML+ `<li>  ${Obj.name} - ${Obj.mail} - ${Obj.age} </li>`

    //lo.appendChild(li);
    }
