let a = [1, 2, 3, 4, 5];

console.log(
  "*********************Anonymous function*******************************"
);
let sum = function () {
  let r = 0;
  for (let i of a) {
    r += i;
  }
  return r;
};

console.log(sum());

console.log(
  "**************************************IIFE******************************"
);

console.log(
  (function () {
    let r = 0;
    for (let i of a) {
      r += i;
    }
    return r;
  })()
);

console.log(
  "*********************Anonymous function*******************************"
);
let sum1 = a.reduce((a, b) => a + b);
console.log(sum1);
