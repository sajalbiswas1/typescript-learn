// buit-in-type data type: number, string, boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 102;
firstName = 'Sajal';
lastName = ' Biswas';
isActivated = true;
fullName = firstName.concat(lastName);
console.log("UserId: ".concat(userId, ", userName: ").concat(fullName, " isActivated: ").concat(isActivated));
console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("I am MERN stack developer");
}
display();
