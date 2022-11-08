let itemlist=document.querySelector('#items')
//console.log(itemlist.parentNode)
//itemlist.parentNode.style.backgroundColor='red'
//2
console.log(itemlist.firstElementChild)
console.log(itemlist.lastElementChild)
console.log(itemlist.firstChild)
console.log(itemlist.lastChild)
console.log(itemlist.nexteSibling)
console.log(itemlist.nextElementSibling)
console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling)



var newDiv=document.createElement('div')
console.log(newDiv)
newDiv.className='hello'
newDiv.id='hello9'
newDiv.setAttribute('title','hellodiv')
var newDivtext=document.createTextNode('hEllo')
newDiv.appendChild(newDivtext)
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
console.log(newDivtext)
container.insertBefore(newDiv,h1)

var newDiv=document.createElement('div')
console.log(newDiv)
newDiv.className='hello'
newDiv.id='hello9'
newDiv.setAttribute('title','hellodiv')
var newDivtext=document.createTextNode('hEllo')
newDiv.appendChild(newDivtext)

