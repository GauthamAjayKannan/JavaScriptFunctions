let a = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(
  "*********************Anonymous function*******************************"
);
let rotate = function () {
  let r = [...a];
  let n = k;
  while (n != 0) {
    t = r[0];
    r.splice(0, 1);
    r.push(t);
    n -= 1;
  }
  return r;
};

console.log(rotate());

console.log(
  "**************************************IIFE******************************"
);

console.log(
  (function () {
    let r1 = [...a];
    let n = k;
    while (n != 0) {
      t = r1[0];
      r1.splice(0, 1);
      r1.push(t);
      n -= 1;
    }
    return r1;
  })()
);
