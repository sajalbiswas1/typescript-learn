// buit-in-type data type: number, string, boolean, void, undefined, null
let userId: number;
let firstName: string;
let lastName: string;
let fullName: string
let isActivated: boolean;

userId = 102;
firstName = 'Sajal';
lastName = ' Biswas';
isActivated = true;

fullName = firstName.concat(lastName);

console.log(`UserId: ${userId}, userName: ${fullName} isActivated: ${isActivated}`)
console.log(fullName.split(' '))
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display(): void {
    console.log("I am MERN stack developer")
}
display()