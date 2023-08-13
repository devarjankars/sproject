
const express= require('express')
const app=express();
const bodyparser=require('body-parser')
app.listen(3030);

app.use(bodyparser.urlencoded({extended:false}))
app.get('/add-item',(req,res,next)=>{
    console.log("add item page ");
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>')
})
app.post('/product',(req,res,next)=>{

    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res,next) =>{
console.log("The Middelever Fun");
res.send('<h1>Welcome to Node js</h1>')
})
