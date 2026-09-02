// solution 01
const describeValue = (value) => `${typeof value} | ${Boolean(value)? "truthy" : "falsy"}`;

// solution 02
const getDayType = (day) => {
  switch (typeof day === "string" ? day.trim().toLowerCase() : "Invalid Day") {
    case "saturday":
    case "friday":
      return `Weekend`;
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return `Working Day`;
    default:
      return "Invalid Day";
  }
};

// solution 03
const validateUsername = (username) =>  username.length < 4  ? "Too Short" :  username.includes(" ")
      ? "No Space Allowed" : username.toLowerCase().includes("admin")
        ? "Reserved Word" : "Available";

// solution 04
const getCngFare = (distance, isNight=false , waitingMinutes=0) => {
let fare = distance > 2 ? 50 + (distance - 2) * 15 : 50;
fare += waitingMinutes * 2;
return isNight ? fare * 1.2 : fare;}

// solution 05
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  const requiredRate =
    runsNeeded > 0 && ballsLeft > 0 ? (runsNeeded / ballsLeft) * 6 : 0;
  let verdict = "";
  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
