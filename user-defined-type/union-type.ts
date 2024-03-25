let anotherUserId: string | number | boolean;

anotherUserId = 10923;
anotherUserId = "Sajal";
anotherUserId = true;

function display1(number: number | string): void{
    console.log(number)
}
display1(34)
display1("sajal")