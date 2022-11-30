const posts=[
{title :'post one', body:'this is post one',createdAt:new Date().getTime()},
{title :'post two', body:'this is post two',createdAt:new Date().getTime()}    
]

function getposts(){
    setInterval(() => {
        let output=''
        posts.forEach((post,index) => {
            output+=`<li>${post.title}-last updated ${(new Date().getTime()-post.createdAt)/1000}-seconds ago</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}

function createposts(post,callback){
    setTimeout(() => {
    posts.push({ ...post,createdAt: new Date().getTime()})
    callback()
    },2000 );
}
 getposts()

 createposts({title: 'post three', body:'this is post three'},getposts)
 
 function create2posts(post,callback){
    setTimeout(() => {
        posts.push({ ...post,createdAt: new Date().getTime()})
      callback()
      
    }, 5000);
 }
 

 create2posts({title: 'post four', body:'this is post four'},getposts)


 
