// type EmpName = string;
// type EmpAge = number;
// type Employee = {
//     name: EmpName,
//     age: EmpAge
// };
// const empName: EmpName = "rg";
// const empAge: EmpAge = 27;
// const employee: Employee = {
//     name: empName,
//     age: empAge
// };
// console.log(employee);

// interface Details {
//     name: string,
//     age: number
// }
// const details: Details = {
//     name: "raghul",
//     age: 53,
// }
// console.log(details);// interface works only with the objects

// interface secondary {
//     value: string
// }
// interface primary extends secondary {
//     num1: number,
//     num2: number,
// }
// const obj: primary = {
//     num1: 10,
//     num2: 20,
//     value: "total"
// }
// console.log(obj);

// function typedInput(num: string | number) {
//     console.log(typeof num);
// //     console.log(num.toUpperCase());//Property 'toUpperCase' does not exist on type 'string | number'.
// //    // Property 'toUpperCase' does not exist on type 'number'.
// }
// typedInput("3");
// typedInput(3);

// function getTime(): number {
//     return 12; //correct
//     return "12"; // incorrect shows errorType 'string' is not assignable to type 'number'
//   }

// function printHello(): void {
//     console.log('Hello!');// correct
//     return 2;//Type 'number' is not assignable to type 'void'.
//   }

// function add(a: number, b: number) {
//     return a + b;
// }
// console.log(add(2, 3));


// function add(num1: number, num2: number = 10) {
//     return num1 + num2;
// }
// console.log(add(1));


// function add({ num1, num2 }: { num1: number, num2: number }) {
//     return num1 + num2;
// }
// console.log(add({ num1: 1, num2: 2 }));
