let users9: object[];
users9 = []

let user6: {name: string, userId: number}
user6 = {name: "Sajal", userId: 1234};
users9.push(user6)

let user7: {name: string, userId: number}
user7 = {name: "Rahim", userId: 234};
users9.push(user7)
// console.log(users4)

for (const key in users9){
    console.log(users9[key]["name"])
}