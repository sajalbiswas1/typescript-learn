var users1;
users = [];
var user3;
user3 = { name: "Sajal", userId: 1234 };
users.push(user3);
var user4;
user4 = { name: "Rahim", userId: 234 };
users.push(user4);
var user5;
user5 = { name: "Rahim", userId: 234 };
users.push(user5);
console.log(users);
var getRequest;
getRequest = "GET";
function requesthandler(requestType) {
    console.log(requestType);
}
requesthandler("GET");
