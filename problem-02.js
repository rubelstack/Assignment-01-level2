const getDayType = (day) => {
  switch (day.toLowerCase()) {
    case "saturday": case "friday": return `Weekend`;
    case "sunday": case "monday": case "tuesday": case "wednesday": case "thursday":
      return `Working Day`;
    default:
      return "Invalid Day";
  }
};
 console.log(getDayType("Friday")); 
console.log(getDayType("friday")); 
console.log(getDayType("FRIDAY")); 
console.log(getDayType("Saturday"));

console.log(getDayType("Sunday"));     
console.log(getDayType("MONDAY"));     
console.log(getDayType("tuesday"));    
console.log(getDayType("Wednesday"));  
console.log(getDayType("THURSDAY"));   

console.log(getDayType("Bandarban"));  
console.log(getDayType("Holiday"));    