class student{
 static count=0
 
 constructor(name,age,phoneNo,BoardMark){
    this.name=name;
    this.age=age;
    this.phoneNo=phoneNo;
    this.BoardMark =BoardMark;
    student.countStudent()
 }
static countStudent(){
    return(student.count++)

}
elegible(){
    if(this.BoardMark>=40){
        console.log(`${this.name} age ${this.age} is elegible `)
    }
else{
    console.log(`${this.name} age ${this.age} is unelegible`)
}
}
placementminimumage(minPlacementAge){
    console.log(this)
    return (minMarks)=>{
        console.log('elegible for current company',this)
        if(this.age>minPlacementAge && this.BoardMark>minMarks){
            console.log(this.name+"candidate is elgible for placement")
        }else{
            console.log(this.name+'candidate is not eligible for placement')
        }
    }

}
}
const student1=new student('sudhanshu',22,8684858436,60)
const student2=new student('sunaina',19,7495053809,70)
const student3=new student('lalit',24,217281292,30)
const student4=new student('pagl',22,8734632742,45)
const student5=new student('run',23,121872812,39)

console.log(student.countStudent())
console.log(student1.elegible())
console.log(student3.elegible())

student1.placementminimumage(18)(40)
student2.placementminimumage(20)(40)