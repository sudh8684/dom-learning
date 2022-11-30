const posts=[
    {title :'post one', body:'this is post one',createdAt:new Date().getTime()},
    {title :'post two', body:'this is post two',createdAt:new Date().getTime()}    
    ]
    
    function getposts(){
        setInterval(() => {
            let output=''
            posts.forEach((post) => {
                output+=`<li>${post.title}-last updated ${(new Date().getTime()-post.createdAt)/1000}-seconds ago</li>`
            });
            document.body.innerHTML=output;
        }, 1000);
    }
    
    function createposts(post){
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
        posts.push({ ...post,createdAt: new Date().getTime()})
      const error=false;
        if(!error)
{
    resolve()
}else{
    reject('somethimg error')
}
    
        },2000 );
    })
    }
   
   
     
     
     function create2posts(post){
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({ ...post,createdAt: new Date().getTime()})
         const error=false
            if(!error){
                resolve()
            }else{
                reject('something error')
            }
          
        }, 5000);
     })
    }
  
      
    function deletePost(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(posts.length>0){
                    const lastelement=posts.pop()
                    resolve(lastelement)

                }else{
                reject('array is empty now')
                }
            }, 1000);

        })
    }
    createposts({title: 'post three', body:'this is post three'}) 
    create2posts({title: 'post four', body:'this is post four'})
    .then(()=>{
        getposts()
        deletePost().then(()=>{
            getposts()
            deletePost().then(()=>{
                getposts()
                deletePost().then(()=>{
                    getposts()
                    deletePost().then(()=>{
                        getposts()
                    deletePost().then(()=>{})
                        .catch((err)=> {console.log('inside catch block',err)})
                        
                    })
                })
            })
        })
    }) .catch(err=> console.log(err)) 