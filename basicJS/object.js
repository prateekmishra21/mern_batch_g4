var obj = { name: "Node", Age: 24, number: "323" };

let { name, Age, Number } = obj;

let Keys = Object.keys(obj);
let Str = "";
Keys.map((val, index) => {
  if (index % 2 !== 0) {
    Str += `Your ${val} is ${obj[val]}`;
  }
  if (Keys.length - 1 !== index) {
    Str += " and ";
  }
});
