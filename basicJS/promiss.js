var promiss = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve({ name: "React", data: [{ id: "2" }, { id: 3 }] });
  }, 3000);
});

// promiss.then(
//   (date) => {
//     date.data.map((x) => {
//       console.log(x);
//     });
//   },
//   () => {}
// );

const getDetails = async () => {
  console.log("Step - 1");
  let res = await fetch();
  console.log(res);
};
console.log("Before Call");
getDetails();
console.log("AFTER cALL");
