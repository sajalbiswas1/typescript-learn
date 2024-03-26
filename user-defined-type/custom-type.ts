let users1: object[];
users = []

type User = {name: string, userId: number}

let user3: User;
user3 = {name: "Sajal", userId: 1234};
users.push(user3)


let user4: User;
user4 = {name: "Rahim", userId: 234};
users.push(user4)


let user5: User;
user5 = {name: "Rahim", userId: 234};
users.push(user5)
console.log(users)

type RequestType = "GET" | "POST"

let getRequest: RequestType;
getRequest = "GET"    

function requesthandler(requestType: RequestType){
    console.log(requestType)
}

requesthandler("GET")