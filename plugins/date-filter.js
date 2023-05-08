import Vue from "vue";

function formatDate(value) {
  const date = new Date(value);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const period = hour < 12 ? "AM" : "PM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  const formattedMinute = minute.toString().padStart(2, "0");
  return `${month} ${day}, ${year}, ${formattedHour}:${formattedMinute} ${period}`;
}

Vue.filter("formatDate", formatDate);
