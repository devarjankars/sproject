console.log('hello to movieHub, Show ticket.....')
console.log('Person 1: ticket ')
console.log('Person 2: ticket ')


let learn_await=async ()=>{
 let person3= new Promise((resolve,reject)=>{ setTimeout(() => {
    resolve('ticket')
},2000)
 })

let getfood=new Promise((resolve,reject)=>{resolve('pizza')})
let cooldrink=new Promise((resolve,reject)=>resolve('coke'))
let ticket=await person3;
console.log("person3=> wife:I have Ticket")
console.log("wife:I am hugery ")

let pizza=await getfood;
console.log(`here your ${pizza}`)
console.log('wife:I need drink')
let coke=await cooldrink;
console.log(`husbend:here is your ${coke}`)
console.log('we shoud go')
return person3;



}
learn_await().then((t)=>{
    setTimeout(()=>{
  console.log( `person3:${t}`)
    },1000)
    })

console.log("person 3:Please await till ticket get");

console.log('Person 4: ticket ')
console.log('Person 5: ticket ')



