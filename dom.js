/*let headerTitle=document.getElementById('header-title')
headerTitle.textContent=('hello')
let header=document.getElementById('main-header')
header.style.borderBottom='solid 3px #000'
var addItems=document.getElementsByClassName('list-group-item')

//addItems[0].style.fontWeight='bold'
//addItems[1].style.fontWeight='bold'
//addItems[2].style.fontWeight='bold'
//addItems[3].style.fontWeight='bold'
//addItems[2].style.backgroundcolor='#008000'

let lielement=document.getElementsByTagName('li')
console.log(lielement)*/

//query selector &query selector all

let header=document.querySelector('li:nth-child(2)')
header.style.color='#008000'

let odd=document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++){
odd[i].style.backgroundColor='green'
}