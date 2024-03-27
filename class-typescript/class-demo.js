var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Sajal Biswas", 25);
user1.display();
var user2 = new User("Tamim Iqbal", 38);
user2.display();
var user3 = new User("Liton Das", 28);
user3.display();
var user4 = new User("Shyombo Sarker", 27);
user4.display();
