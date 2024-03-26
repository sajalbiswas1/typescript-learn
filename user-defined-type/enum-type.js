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
var RequestsType3;
(function (RequestsType3) {
    RequestsType3["readData"] = "READ_DATA";
    RequestsType3["deleteData"] = "DELETE_DATA";
    RequestsType3[RequestsType3["id"] = 1234] = "id";
})(RequestsType3 || (RequestsType3 = {}));
console.log(RequestsType3);
