// numeric enum
// enum RequestsType {
//     readData = 1,
//     saveData = 3,
//     deleteData,
// }
// // console.log(RequestsType);
// // console.log(RequestsType.readData);
// console.log(RequestsType["saveData"])


// string enum
// enum RequestsType2 {
//     readData = "READ_DATA",
//     deleteData = "DELETE_DATA",
// }
// console.log(RequestsType2)
// console.log(RequestsType2.readData)
// console.log(RequestsType2["deleteData"])


// heterogenous enum
enum RequestsType3 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = 1234,
}
console.log(RequestsType3)