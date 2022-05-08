let a1 = [1, 12, 15, 26, 38];
let a2 = [2, 13, 17, 30, 45];

console.log(
  "*********************Anonymous function*******************************"
);
let median = function () {
  let r = [];
  r = a1.concat(a2);
  r.sort((a, b) => a - b);
  let n = r.length;
  if (n % 2 == 1) {
    return r[n / 2];
  } else {
    t = (r[n / 2] + r[n / 2 - 1]) / 2;
    return t;
  }
};

console.log(median());

console.log(
  "**************************************IIFE******************************"
);

console.log(
  (function () {
    let r = [];
    r = a1.concat(a2);
    r.sort((a, b) => a - b);
    let n = r.length;
    if (n % 2 == 1) {
      return r[n / 2];
    } else {
      t = (r[n / 2] + r[n / 2 - 1]) / 2;
      return t;
    }
  })()
);
