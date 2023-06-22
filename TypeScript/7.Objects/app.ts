// const raghul: { place: string, id: number } = {
//     place: "Sattur",
//     id: 53
// }
// console.log(raghul); //no error

// const ashok: { place: string, id: number } = {
//     place: "Sattur",
//     id: "53"
// }
// console.log(raghul);
// // Type 'string' is not assignable to type 'number'.ts

// const tour = {
//     place: "chennai"
// }
// tour.place = "delhi";// no error
// tour.place = 53;
// // Type 'number' is not assignable to type 'string'.

// const student: {name:string, age:number}={
//     name:'raghul'
// }
// console.log(student);
// // Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.

// const student: { name: string, age?: number } = {
//     name: 'raghul',
// }
// console.log(student); // no error because age is a wildcard property

const employee: { [index: string]: number } = {};
employee.Ramesh = 100;//no error
// employee.suresh = "20";//Type 'string' is not assignable to type 'number'.
console.log(employee);
