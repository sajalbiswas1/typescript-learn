export class User{
    userName: string ;
    age: number;
    constructor(userName: string,age: number){
        this.userName = userName;
        this.age = age;
    }
    display(){
        console.log(`userName: ${this.userName}, age: ${this.age}`)
    }
}

export class Student extends User{
    studentId: number;
    constructor(userName: string,age: number, studentId: number){
        super(userName, age)
        this.studentId = studentId;
    }
    display(){
        console.log(`userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }

}