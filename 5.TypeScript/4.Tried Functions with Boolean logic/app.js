"use strict";
function add(n1, n2, per) {
    if (per) {
        // console.log("Result : " + n1 + n2);//mathematical error-Type Coercion
        let total = n1 + n2;
        console.log("Result : " + total); //correct way without error
    }
    else {
        console.log("You Dont Have Permission");
    }
}
const number1 = 5;
const number2 = 2.2;
const permission = true;
add(number1, number2, permission);
