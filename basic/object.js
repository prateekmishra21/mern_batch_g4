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

// console.log(Obj);

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

// Obj = { Name: "Aman" };
// Obj = { ...Obj, Email: "", Address: {} };
// Obj = { Name: "Aman", Email: "", Address: {} };
// Obj = { ...Obj, Address: { ...Obj.Address, Pin: 344 }, Email: "dbkkj@klndl" };

Obj = {
  Name: "Aman",
  Email: "dbkkj@klndl",
  Address: {
    Name: "Aman",
    Email: "dbkkj@klndl",
    Address: {
      Pin: 344,
      Details: {},
    },
    Test: ":Test",
  },
};

Obj = { name: "React", Mobile: 2233 };
var { Mobile } = Obj;

console.log(Mobile);

Obj.Mobile = 445;
var { Mobile } = Obj;
console.log(Mobile);

// console.log(Object.keys(Obj));
console.log(Object.values(Obj));
