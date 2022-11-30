class queue{
   constructor(){
    this.element={}
    this.head= 0;
    this.tail=0;
   }
enqueue(element){
    this.element[this.tail]=element
    this.tail++
}
dequeue(element){
   const item= this.element[this.head]=element
    delete this.element[this.head]
    this.head++
    return item
}
peek(){
return this.element[this.head]
}
 length(){
    return this.tail-this.head
}
 isEmpty(){
  return this.length==0
}

}

let q=new queue()
for(let i=1;i<=10;i++){
q.enqueue(i)
}
console.log(q.element)
q.dequeue()
console.log(q.element)
console.log(q.peek())
console.log(q.isEmpty())
console.log(q.length())