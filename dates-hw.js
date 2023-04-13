/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not.
// (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

const testingDate = new Date("2023-04-20T11:14:00Z");
console.log(typeof testingDate);

console.log(testingDate instanceof Date);

// -----------------------------------------------------------------------------------------------

// 2. Create today's date

const today = new Date().toLocaleDateString();
console.log(today);

// ------------------------------------------------------------------------------------------------

// 3. Get the current timestamp (using a static method of Date)

const currentDate = new Date();
const timestamp = currentDate.getTime();

console.log(timestamp);

// ------------------------------------------------------------------------------------------------

// 4. Create a date to represent next Christmas Day
// does it mean dec 26?

const xmas = new Date(1703570400 * 1000);
console.log(xmas.toLocaleString());

const xmas2 = new Date(2023, 11, 26, 07, 00, 00);
console.log(xmas.toString());

// my answer is: Tue Dec 26 2023 07:00:00 GMT+0100 (Central European Standard Time)

// --------------------------------------------------------------------------------------------------

//  5. how manny days left until christmas

const currentD = new Date();
const christmasD = new Date(currentD.getFullYear(), 11, 25);
if (currentD.getMonth() == 11 && currentD.getDate() > 25) {
  christmasD.setFullYear(christmasD.getFullYear() + 1);
}
const oneday = 1000 * 60 * 60 * 24;

console.log(
  `${Math.ceil(
    (christmasD.getTime() - currentD.getTime()) / oneday
  )} days left until Christmas!`
);

// Get difference between now and xmas

// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second

// Math.floor for whole days; Math.ceil to include today

// --------------------------------------------------------------------------------------------------------

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

// answer -  they're random, changing earlier/later between them, I get different dates after each log

// --------------------------------------------------------------------------------------------------

// 7. How do I test if a date is valid? ****

//  not sure which one
// a.
const date = "april 48, 2019";
const answer = Date.parse(date);
console.log(answer);

// b.
function validDate() {
  let x = new Date();
  return x instanceof Date && !isNaN(x);
}

console.log(validDate());

// c.
const timestamp2 = Date.parse("dog");
//  returns timestamp if passed a date in parenthesis

if (isNaN(timestamp2) == false) {
  let d = new Date(timestamp2);
}

console.log(timestamp2);

// -------------------------------------------------------------------------------------------------

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

let dateString = new Date();
let dd = dateString.getDate();
let mm = dateString.getMonth() + 1;
let yyyy = dateString.getFullYear();

dateString = mm + "-" + dd + "-" + yyyy;
console.log(dateString);

// -----------------------------------------------------------------------------------------------------

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

const anotherDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(anotherDate.toLocaleDateString("en-GB", options));

console.log(anotherDate.toLocaleDateString("de-DE", options));

// -------------------------------------------------------------------------------------------------------

// 10. Output the current time in hours, mins & seconds

const currentDay = new Date();
const currentTime =
  currentDay.getHours() +
  ":" +
  currentDay.getMinutes() +
  ":" +
  currentDay.getSeconds();

console.log(currentTime);

// --------------------------------------------------------------------------------------------------------

//  11.  Make a clock by starting with the current time and then every second adds a second to the date and prints it.

//  it's in separate clock-timer.html file

// --------------------------------------------------------------------------------------------------------

//  12. Create a copy of today

dateOriginal = new Date();
cloneDate = new Date(dateOriginal);

console.log(dateOriginal, cloneDate);

// ------------------------------------------------------------------------------------------------------------

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

let dateNow = new Date();
dateNow.setDate(dateNow.getDate());
let dateFuture =
  dateNow.getMonth() +
  3 +
  "/" +
  (dateNow.getDate() + 1) +
  "/" +
  (dateNow.getFullYear() + 3);

console.log(dateFuture);

// ---------------------------------------------------------------------------------------------------------------

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

// Belgium is Central European Time (UTC+01:00), 1 hour ahead of UK. I get answer "-120"

const belgiumTime = new Date();
console.log(belgiumTime.getTimezoneOffset());

// ---------------------------------------------------------------------------------------------------------------

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format)
// to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

const australiaTime = new Date();
const formatOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};

console.log(
  new Intl.DateTimeFormat("en-AU", formatOptions).format(australiaTime)
);

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

const someDay = new Date("2015-02-19");

function createDuration(someDay) {
  const year = someDay.getFullYear() * 365 * 31 * 24 * 60 * 60 * 1000;
  const month = someDay.getMonth() * 31 * 24 * 60 * 60 * 1000;
  const day = someDay.getTime() * 24 * 60 * 60 * 1000;
  const hour = someDay.getHours() * 60 * 60 * 1000;
  const minute = someDay.getMinutes() * 60 * 1000;
  const second = someDay.getSeconds() * 1000;

  const result = year + month + day + hour + minute + second;

  return result;
  // your code that returns total ms
}
// console.log()
//   does not return any answer

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

// only calculates past dates

const newYear = new Date("2022-12-31");
const birthday = new Date("2018-04-20");

function calculateDate(newYear, birthday) {
  var diff = Math.abs(newYear.getTime() - birthday.getTime());
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  var message = newYear.toDateString();
  message += " was ";
  message += years + " years ";
  message += months + " months ";
  message += days + " days ago ";

  return message;
}

//  only get answer if substract  newYear from birthday??
x = calculateDate(birthday, newYear);
console.log(x);
