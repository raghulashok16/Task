// const num: number[] = [];
// num.push("5");
// //Argument of type 'string' is not assignable to parameter of type 'number'.

// const num: readonly number[] = [];
// num.push(6);
// // Property 'push' does not exist on type 'readonly number[]'.

// const num =[1,2,3,4];
// num.push(5);//no error
// num.push("6");
// // Argument of type 'string' is not assignable to parameter of type 'number'.

// let arrayTuple:[number,string,boolean]=[12,"13",true];// no error
// let arrayTuple:[number,string,boolean]=[12,true,"13"];
// Type 'boolean' is not assignable to type 'string'.
//Type 'string' is not assignable to type 'boolean'.

// let arrayTuple: readonly[number,string,boolean]=[12,"13",true];// no error
// arrayTuple.push(12);
// //Property 'push' does not exist on type 'readonly [number, string, boolean]'.

// let time: [hours: number, minutes: number] = [12, 20];
// console.log(time);

// const time: [number, number] = [12, 10];
// const [x, y] = time;
// console.log(x, y);