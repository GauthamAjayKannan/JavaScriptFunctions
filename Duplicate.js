let a = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 6, 6, 6];

console.log(
  "*********************Anonymous function*******************************"
);
let dup = function () {
  let r = [];
  for (let i of a) {
    if (!r.includes(i)) {
      r.push(i);
    }
  }
  return r;
};

console.log(dup());

console.log(
  "**************************************IIFE******************************"
);

console.log(
  (function () {
    let r = [];
    for (let i of a) {
      if (!r.includes(i)) {
        r.push(i);
      }
    }
    return r;
  })()
);
