// public, private, protected, readonly
class User {
    public userName: string;
    public age: number;
    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
    display(): void {
        console.log(`userName: ${this.userName}, age: ${this.age}`)
    };
}

class Student extends User {
    private studentId: number;
    constructor(userName: string, age: number, studentId: number) {
        super(userName, age)
        this.studentId = studentId;
    }
    display() {
        console.log(`userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }
    setStudentId(studentId: number): void {
        this.studentId = studentId;
    }
    getStudentId(): number {
        return this.studentId
    }
}
let student = new Student("Sajal Biswas", 25, 20039953)
student.setStudentId(12345)
console.log(student.getStudentId())