let p= document.querySelector("#items");
console.log(p);
console.log(p.parentNode);
p.style.backgroundColor="lightblue";
p.parentNode.style.backgroundColor="lightblue";
//child Node
console.log(p.childNodes);//it consider all thing including line break  white spaces
//console.log(p,childNodes[3]);
console.log(p.children);//it select as html collection only without  line break  white spaces
p.children[3].style.color ="darkblue";
console.log(p.firstChild);//it consider first thing including line break  white spaces
console.log(p.firstElementChild);//it select as html collection only without  line break  white spaces
p.firstElementChild.textContent="Sanjay trying to Comback In Life";
p.firstElementChild.style.color="darkblue";
console.log(p.lastChild);//it consider last thing including line break  white spaces
console.log(p.lastElementChild);//it select as html collection tag only without  line break  white spaces
p.lastElementChild.textContent="Sanjay will work hard"
p.lastElementChild.style.color="darkblue";
//next and previous sibling 
console.log(p.previousSibling);//it consider all thing including line break  white spaces
console.log(p.previousElementSibling);
p.previousElementSibling.textContent="This I need to always Remember";
console.log(p.nextSibling);//it will show comment,it consider all thing including line break  white spaces
p.nextElementSibling.textContent="have good day";
let newTag=document.createElement("div");
newTag.id="hi";
newTag.className="learn";
newTag.setAttribute("title","hello new tag");
let txt=document.createTextNode("hello Everybody hope your Great");
newTag.appendChild(txt);
console.log(newTag);
//insert in header or anywhere
let wtot=document.querySelector('header .container');
let h1=document.querySelector('header h1');
wtot.insertBefore(newTag , h1)
console.log(p.parentElement);

let btn=document.getElementById('btn').addEventListener('click', btnclk);
 function btnclk(){
     newTag.style.backgroundColor="yellow";
 }