// var name = "React";
// name = "Node";
// console.log(name);

// var name = "Mr.";
// console.log(`Hello all i am here ${name}`);

var arr = [434, 5465, 6576, 5456, 767, 43, 65, 43, 78, 345];
// console.log(arr.length);
// console.log(arr[arr.length - 3]);
// console.log(arr.slice(arr.length - 4));
// console.log(arr.slice(arr.length));
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i] * arr[i]);
// }

// arrow methods
// const Add = (v1, v2, v3 = 1) => {
//   return [v1 + v2 + v3, v1 * v2 * v3];
// };

// const Cal = (method, v1, v2) => {
//   return method(v1, v2);
// };

// let [a, m] = Cal(Add, 34, 4);
// console.log(m);

// const userDetails = (details) => {
//   console.log(details.name);
// };

// const userDetails = ({ name, Age, Number }) => {
//   console.log(name, Age);
// };

const userDetails = (props) => {
  let Keys = Object.keys(props);
  Keys.map((val, i, arr) => {
    console.log(`Your ${} is ${}`);
  });
};

userDetails({ name: "Node", Age: 24 });

var key = "Age"
var obj = { name: "Node", Age: 24 }

