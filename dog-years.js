let userAge = 20;
let userName = "John";
userName = userName.toLowerCase();

let earlyYears = 2 * 10.5;
let laterYears = (userAge - 2) * 4;

let userAgeInDogYears = earlyYears + laterYears;

console.log(
  `My name is ${userName}. I am ${userAge} years old in human years which is ${userAgeInDogYears} years old in dog years.`
);
