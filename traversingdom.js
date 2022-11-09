let form=document.getElementById('addForm')
let itemlist=document.getElementById('items')
let filter=document.getElementById('filter')


form.addEventListener('submit', addItem)
itemlist.addEventListener('click', removeItem)
filter.addEventListener('keyup',filterItem)

function addItem(e){
    e.preventDefault()

 let newItem=document.getElementById('item').value
 let box=document.getElementById('box').value


 var li=document.createElement('li')
 li.className='list-group-item'

 li.appendChild(document.createTextNode(newItem))
 li.appendChild(document.createTextNode(" " +box))
 let deletebtn=document.createElement('button')
deletebtn.className="btn btn-danger btn-sm float-right delete"
deletebtn.appendChild(document.createTextNode('X'))
li.appendChild(deletebtn)
 itemlist.appendChild(li)

 let b=document.querySelectorAll("li")

for(let i=0;i<b.length;i++)
{
    let editbtn=document.createElement('button')
    editbtn.className="btn btn-danger btn-sm float-right delete"
    editbtn.appendChild(document.createTextNode('EDIT'))
    b[i].insertAdjacentElement("afterbegin",editbtn)
}

/* let editbtn=document.createElement('button')
editbtn.className="btn btn-danger btn-sm float-right delete"
editbtn.appendChild(document.createTextNode('EDIT'))
li.appendChild(editbtn)
 itemlist.appendChild(li)*/
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement
            itemlist.removeChild(li);

        }
    }
}
function filterItem(e){
    let text=e.target.value.toLowerCase()
    let items=itemlist.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent
        let box=item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text)!=-1 || box.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }

        })
    }
 
