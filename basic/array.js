var names = [1, 2];
names.push(24);

// console.log(names);
var emails = [424, 4545, 464];

// names = names.concat(emails);

names = [...emails, ...names];

// console.log(names);
//names.length,
// console.log(names[names.length - 1]);

// console.log(names.slice(0, 3));

// Question:
var data = [
  { name: "S1", Key: 1 },
  { name: "S2", Key: 4 },
  { name: "S3", Key: 1323 },
  { name: "S4", Key: 154 },
  { name: "S5", Key: 154 },
];

var arr = [53, 545, 46, 6, 646, 4, 64, 64];

arr.map((value, index) => {
  console.log(value, index);
});
