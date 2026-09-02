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
