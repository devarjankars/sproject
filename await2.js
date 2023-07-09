
let arr=[];
function createPost(){
    return new Promise((resolve, reject)=>{
 setTimeout(()=>{
    arr.push('Post');
    resolve('New-Post');
 },2000)
    })
    
}
function DeletePost(){
    return new Promise((resolve,reject)=>{
        if(arr.length>0){
            let del=arr.pop();
            resolve('del')
        }
        else{
            reject("ERROR")
        }
    })
}
let call=async()=>{
   
 
    await createPost()
    console.log(   `new post updated `);
    console.log(arr)
    
    await createPost()
    console.log(   `new post updated `);
    console.log(arr)
  await DeletePost()
    console.log(   `new post deleted`);
    console.log(arr)
    await DeletePost()
    console.log(   `new post deleted`);
    console.log(arr)
    
   
   
    DeletePost() .catch((e)=>{
   console.log(e);
   })
 
} 

call();
