// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const convertTime = (time) => {
  const timeSplit = time.split(":");
  let buildTime = "";
  let hour = timeSplit[0];
  let minutes = timeSplit[1];
  let seconds = timeSplit[2].charAt(0) + timeSplit[2].charAt(1);
  let amPm = timeSplit[2].slice(2);

  if (amPm === "AM") {
    if (+hour === 12) {
      hour = "00";
    }
  } else {
    if (+hour === 12) {
      hour = "12";
    } else {
      hour = +hour + 12;
    }
  }
  buildTime = [hour, minutes, seconds].join(":");

  console.log(buildTime);
  return buildTime;
};

// convertTime("07:05:45PM");
//   convertTime("12:05:45AM");
convertTime("12:45:54PM");
