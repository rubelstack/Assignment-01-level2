const getDayType = (day) => {
  switch (day.toLowerCase()) {
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
