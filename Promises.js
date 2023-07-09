let arr=[]
function creatPost(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
           arr.push('post');
           resolve();
    },1000)
  })
}
function DeletePost(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(arr.length >0){
        arr.pop();
        resolve();
      }
      else{
        reject('Error')
      }
    })
  })
}
function Lastactivity(){
  return new Promise ((resolve,reject)=>{
    let timenow=new Date();
    resolve (timenow);
  })
}


creatPost().then(()=>{
  console.log(arr);
  Lastactivity().then((val)=>{
    console.log(val);
    creatPost().then(()=>{
      console.log(arr);
      Lastactivity().then((val)=>{
        console.log(val);
        DeletePost().then(()=>{
          console.log(arr);
          Lastactivity().then((val)=>{
            console.log(val);
          })
        })
      })
    })

  })
})