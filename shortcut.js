// false value
//  0 -0 "" null undefined
// "asdfgh" []{}true
const test = "rahim";
// if (test) {
//     console.log("It's Truty")
// } else {
//     console.log("It's falsy")
// }
// test? console.log("It's truty"):console.log("It's falsy")

// const num = 50;
// const result = num >= 10 && num > 20 ? "truth" : "False";
// console.log(result);



const isActive = true;
const showUser = () => console.log("show user green");
const hideUser = () => console.log("hide user green");
// isActive ? showUser() : hideUser();
isActive && showUser() 
