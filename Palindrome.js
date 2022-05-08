let a = ["hello", "world", "apple", "madam", "malayalam", "aba", "racecar"];

console.log(
  "*********************Anonymous function*******************************"
);
let palindrome = function () {
  let r = [];
  for (let i of a) {
    if (i === i.split("").reverse().join("")) r.push(i);
  }
  return r;
};

console.log(palindrome());

console.log(
  "**************************************IIFE******************************"
);
console.log(
  (function () {
    let r = [];
    for (let i of a) {
      if (i === i.split("").reverse().join("")) r.push(i);
    }
    return r;
  })()
);

console.log(
  "*********************Arrow function*******************************"
);

let palindrome1 = a.filter((i) => i === i.split("").reverse().join(""));

console.log(palindrome1);
