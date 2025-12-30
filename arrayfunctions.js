let arr1 = ["Raj", "Raushan", "Ankit", "Aakash", "Himanshu"];
let arr2 = [1, 2, 3, 4, 5];

let arr3 = arr1.concat(arr2);
console.log(arr3);

let trueorfalse = arr2.every(i => i > 0);
console.log(trueorfalse);

let arr4 = arr2.filter(i => i%2 != 0);
console.log(arr4);

let res = arr1.find(i => i === "lol");
console.log(res);

arr2.forEach(i => {console.log(i*2)});

let str = "This is a Sample String";
let ch = Array.from(str);
console.log(ch);

let tf = arr1.includes("Ankit");
console.log(tf);

let idx1 = arr1.indexOf("Ankit");
let idx2 = arr1.indexOf("aakash");

console.log(idx1 + " " + idx2);

let double = arr2.map(i => i * 2);
console.log(double);

let sum = double.reduce((sum, n) => sum + n, 0);
console.log(sum);

arr2.reverse();
console.log(arr2);

let [a, , b, , c] = arr1;
console.log(a);
console.log(b);
console.log(c);

const user = {
    names: "Raj Ranjan",
    age: 21,
    college: "LPU"
}

const {names: username, age: userage, college: usercollege} = user;
console.log(username);
console.log(userage);
console.log(usercollege);

let arr5 = [1, [2, 3]];
let copy = [...arr5];

copy[1][0] = 4;
console.log(arr5);

let letters = "This is a sample string";
let ch1 = [...letters];
console.log(ch1);

let [first, ...others] = arr1;
console.log(first);
console.log(others);