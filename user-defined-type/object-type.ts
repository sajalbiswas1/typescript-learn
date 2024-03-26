let users: object[];
users = []

let user1: {name: string, userId: number}
user1 = {name: "Sajal", userId: 1234};
users.push(user1)

let user2: {name: string, userId: number}
user2 = {name: "Rahim", userId: 234};
users.push(user2)
// console.log(users)

for (const key in users){
    console.log(users[key]["name"])
}