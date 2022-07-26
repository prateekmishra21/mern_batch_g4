const Add = (x, y, z, a = 1) => {
  return x + y + a;
};

const Sub = (x, y, z, a = 1) => {
  return x - y - a;
};

const Cal = (func, func2, v1, v2) => {
  return func(func2(v1, v2), v2);
};

let ans = Cal(Sub, Sub, 4, 5);
console.log(ans);
