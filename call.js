let student1={
    Name:'sudhanshu',
    age:'22'
}
let student2={
    Name:'sunaina',
    age:'19'
}
function student(){
    console.log(this.age)
}
student.call(student1)
student.apply(student2)
student.bind(student2)
console.log(student)