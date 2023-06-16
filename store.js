
function storedata(){
let fname=document.getElementById('fname').value;
console.log(fname);
let lname=document.getElementById('ls').value;
console.log(lname);
let mail=document.getElementById('Mail').value;
console.log(mail);
let mbn=document.getElementById('Mbn').value;
console.log(mbn);

localStorage.setItem("fname",fname);
localStorage.setItem("lname", lname);
localStorage.setItem("email",mail);
localStorage.setItem("MbileNo",mbn);

}