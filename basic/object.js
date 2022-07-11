var Obj = {
  Details: {
    Name: { first_name: "", last_name: "" },
    Address: { City: "", State: "" },
  },
};

Obj = {
  ...Obj,
  Details: { ...Obj.Details, Address: { ...Obj.Details.Address, Pin: 12 } },
};

// Obj = {
//   ...Obj,
//   Details: { ...Obj.Details, Name: { ...Obj.Details.Name, final_name: "" } },
// };

// Obj = { ...Obj, Details: { ...Obj.Details, Email: "P@g.com" } };

// Obj = {
//   ...Obj,
//   Course: "MERN",
//   Subject: "JS",
//   Domain: "Eng.",
// };

console.log(Obj);

// Obj.Course = "MERN";

// Obj["Course"] = "MERN";
// Obj["Subject"] = "JS";
// Obj["Domain"] = "Eng.";

// var Details = { Name: "", Add: "" };
// Details.Name = "React";

// Obj.Details.Name.first_name = "Java";

// console.log(Obj.Details.Name);

var Details = { Name: "React", Add: "Delhi", Email: "@" };

// Details.Name = "Node";
// Details.Mobile = 99;
// Details["Mobile"] = 999;

// var Name = Details.Name;
// var { Name, Mobile } = Details;
