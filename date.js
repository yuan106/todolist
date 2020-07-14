// code used to be in app.js

// module.exports.getDate = getDate;
// module.exports.getDate = function () {
//module可以省略
exports.getDate = function () {
  // var getDate = function () {
  // function getDate() {
  var today = new Date();
  //   var currentDay = today.getDay();
  //   var day = ""; //ejs

  //   if (today.getDay() === 6 || today.getDay() === 0) {
  //     day = "weekend";

  //   } else {
  //     day = "weekday";

  //   }

  //   switch (currentDay) {
  //     case 0:
  //       day = "sunday";
  //       break;

  //     case 1:
  //       day = "monday";
  //       break;
  //     case 2:
  //       day = "tuesday";
  //       break;

  //     case 3:
  //       day = "wednesday";
  //       break;
  //     case 4:
  //       day = "thursday";
  //       break;
  //     case 5:
  //       day = "friday";
  //       break;
  //     case 6:
  //       day = "saturday";
  //       break;

  //     default:
  //       console.log("Error");
  //       break;
  //   }

  //   javascript date format: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  return day;
};
//how do we export date.js, make it elsewhere if its needed
//https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_the_module_object
//the module free variable is a reference to the object representing the current module

module.exports.getDay = getDay;
function getDay() {
  var today = new Date();

  var options = {
    weekday: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  return day;
}
console.log(module.exports);
