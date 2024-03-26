var users;
users = [];
var user1;
user1 = { name: "Sajal", userId: 1234 };
users.push(user1);
var user2;
user2 = { name: "Rahim", userId: 234 };
users.push(user2);
// console.log(users)
for (var key in users) {
    console.log(users[key]["name"]);
}
