/* =================== 1 =================== */
function tellFortune(job, place, partner, kids) {
  console.log(
    "You will be a " + job + " in " + place +
    ", and married to " + partner + " with " + kids + " kids."
  );
}
tellFortune("software engineer", "Jordan", "Alice", 3);

/* =================== 2 =================== */
function calculateDogAge(age) {
  console.log("Your doggie is " + (age * 7) + " years old in dog years!");
}
calculateDogAge(1);

/* =================== 3 =================== */
function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var total = (maxAge - age) * 365 * amountPerDay;
  console.log(
    "You will need " + total +
    " cups of tea to last you until the ripe old age of " + maxAge
  );
}
calculateSupply(30, 3);

/* =================== 4 =================== */
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Adam"));

/* =================== 5 =================== */


/* =================== 6 =================== */
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}

/* =================== 7 =================== */
function cube(x) {
  return x * x * x;
}
console.log(cube(4));

/* =================== 8 =================== */
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));
console.log(multiply(5, 4));

/* =================== 9 =================== */
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return "yes you can";
  } else {
    return "please come back after " + (20 - age) + " years to get one";
  }
}
console.log(canIGetADrivingLicense(17));

/* =================== 10 =================== */
function sameLength(a, b) {
  if (a.length == b.length) {
    return true;
  }
  return false;
}
console.log(sameLength("tree", "clue"));
console.log(sameLength("tree", "car"));

/* =================== 11 =================== */
function largerNubmer(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(largerNubmer(5, 6));

/* =================== 12 =================== */
function smallerNubmer(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  }
  return c;
}
console.log(smallerNubmer(8, 6, 7));

/* =================== 13 =================== */
function shorterString(a, b, c, d, e) {
  var shortest = a;

  if (b.length < shortest.length) shortest = b;
  if (c.length < shortest.length) shortest = c;
  if (d.length < shortest.length) shortest = d;
  if (e.length < shortest.length) shortest = e;

  return shortest;
}
console.log(shorterString("air","school","car","by","github"));

/* =================== 14 =================== */
function longerString(a, b, c, d) {
  var longest = a;

  if (b.length > longest.length) longest = b;
  if (c.length > longest.length) longest = c;
  if (d.length > longest.length) longest = d;

  return longest;
}
console.log(longerString("air","school","car","github"));

/* =================== 15 =================== */
function isEven(num) {
  return num % 2 == 0;
}
console.log(isEven(2));

/* =================== 16 =================== */
function isOdd(num) {
  return num % 2 != 0;
}
console.log(isOdd(5));

/* =================== 17 =================== */
function positive(num) {
  if (num < 0) {
    return num * -1;
  }
  return num;
}
console.log(positive(-5));

/* =================== 18 =================== */
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Adam", "McCallen"));

/* =================== 19 =================== */
function average(a, b, c, d, e) {
  var sum = a + b + c + d + e;
  return sum / 5;
}
console.log(average(5, 7, 9, 3, 5));

/* =================== 20 =================== */
function randomNumber() {
  return Math.random();
}
console.log(randomNumber());

/* =================== 21 =================== */
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(1, 8));

/* =================== 22 =================== */
function scoreInUniversty(score) {
  if (score >= 95) return "A";
  if (score >= 85) return "B";
  if (score >= 70) return "C";
  if (score >= 50) return "D";
  return "F";
}
console.log(scoreInUniversty(71));

/* =================== 23 =================== */
var count = 0;
function counter() {
  count = count + 1;
  return count;
}
console.log(counter());
console.log(counter());
console.log(counter());

/* =================== 24 =================== */
function resetCounter() {
  var lastValue = count;
  count = 0;
  return lastValue + " and the counter reset now";
}
console.log(resetCounter());
console.log(counter());
