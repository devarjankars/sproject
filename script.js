 let tag=document.getElementsByTagName("li");
 tag[4].innerText="helloTag";
 tag[4].style.backgroundColor="lightblue";
 let items=document.querySelectorAll('.list-group-item');
 items[1].style.color="green";
 let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
 for(let i=0;i<odd.length;i++)
odd[i].style.backgroundColor="green";

let inv=document.querySelectorAll(".list-group-item")
inv[2].style.display="none";