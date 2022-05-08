let a = [
  "hello",
  "world",
  "apple",
  "banana",
  "ram",
  "this is my first code in javascript",
];

console.log(
  "*********************Anonymous function*******************************"
);
let cap = function () {
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes(" ")) {
      let t = a[i].split(" ");
      for (let j = 0; j < t.length; j++) {
        t[j] = t[j][0].toUpperCase() + t[j].slice(1);
      }
      a[i] = t.join(" ");
    } else {
      a[i] = a[i][0].toUpperCase() + a[i].slice(1);
    }
  }
  console.log(a);
};

cap();

console.log(
  "**************************************IIFE******************************"
);
(function () {
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes(" ")) {
      let t = a[i].split(" ");
      for (let j = 0; j < t.length; j++) {
        t[j] = t[j][0].toUpperCase() + t[j].slice(1);
      }
      a[i] = t.join(" ");
    } else {
      a[i] = a[i][0].toUpperCase() + a[i].slice(1);
    }
  }
  console.log(a);
})();

console.log(
  "*********************Arrow function*******************************"
);
let cap1 = () => {
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes(" ")) {
      let t = a[i].split(" ");
      for (let j = 0; j < t.length; j++) {
        t[j] = t[j][0].toUpperCase() + t[j].slice(1);
      }
      a[i] = t.join(" ");
    } else {
      a[i] = a[i][0].toUpperCase() + a[i].slice(1);
    }
  }
  console.log(a);
};

cap1();
