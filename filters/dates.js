/*
A date formatter filter for Nunjucks
*/
module.exports = function (date, part) {
  var d = new Date(date);
  if (part == "year") {
    return d.getUTCFullYear();
  }
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return month[d.getMonth()] + " " + d.getUTCFullYear();
};
