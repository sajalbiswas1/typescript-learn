class User{
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

class Student extends User{
    studentId: number;
    constructor(userName: string,age: number, studentId: number){
        super(userName, age)
        this.studentId = studentId;
    }
    display(){
        console.log(`userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }

}

let student = new Student("Sajal Biswas", 25, 20039953)
student.display();

// let user2 = new User("Tamim Iqbal", 38)
// user2.display();

// let user3 = new User("Liton Das", 28)
// user3.display();

// let user4 = new User("Shyombo Sarker", 27)
// user4.display();

