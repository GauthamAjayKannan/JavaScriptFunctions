let a = [12, 3, 4, 55, 66, 77, 88];

console.log(
  "*********************Anonymous function*******************************"
);
let odd = function () {
  for (let i of a) {
    if (i % 2) {
      console.log(i);
    }
  }
};

odd();

console.log(
  "**************************************IIFE******************************"
);
(function () {
  for (let i of a) {
    if (i % 2) {
      console.log(i);
    }
  }
})();

console.log(
  "**************************************Arrow******************************"
);

let odd1 = a.filter((i) => i % 2);

console.log(odd1.join(" "));
