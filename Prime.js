let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(
  "*********************Anonymous function*******************************"
);
let prime = function () {
  let k = 0;
  let r = [];
  for (let i of a) {
    if (i < 2) continue;
    k = 0;
    for (let j = 2; j < i - 1; j++) {
      if (i % j === 0) {
        k = 1;
        break;
      }
    }
    if (!k) {
      r.push(i);
    }
  }
  return r;
};

console.log(prime());

console.log(
  "**************************************IIFE******************************"
);

console.log(
  (function () {
    let k = 0;
    let r = [];
    for (let i of a) {
      if (i < 2) continue;
      k = 0;
      for (let j = 2; j < i - 1; j++) {
        if (i % j === 0) {
          k = 1;
          break;
        }
      }
      if (!k) {
        r.push(i);
      }
    }
    return r;
  })()
);

console.log(
  "*********************Arrow function*******************************"
);
let prime1 = a.filter((i) => {
  let k = 0;
  if (i < 2) return false;
  k = 0;
  for (let j = 2; j < i - 1; j++) {
    if (i % j === 0) {
      k = 1;
      break;
    }
  }
  if (!k) {
    return true;
  }
  return false;
});

console.log(prime1);
