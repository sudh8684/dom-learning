const myform=document.querySelector('#my-form')
let Name=document.getElementById('name')
let email=document.getElementById('email')
myform.addEventListener('submit',onSubmit)

function onSubmit(e){
    console.log(Name.value)
    e.preventDefault()

    //localStorage.setItem('name',Name.value)
    //localStorage.setItem('email',email.value)
   const obj={
    Name,email    
   }
   localStorage.setItem(obj.Name,JSON.stringify(obj))
}