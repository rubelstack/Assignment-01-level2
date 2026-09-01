const getDayType = (day) => {
  switch (day.toLowerCase()) {
    case "saturday": case "friday": return `Weekend`;
    case "sunday": case "monday": case "tuesday": case "wednesday": case "thursday":
      return `Working Day`;
    default:
      return "Invalid Day";
  }
};
getDayType("Friday"); 
getDayType("friday"); 
getDayType("FRIDAY"); 
getDayType("Saturday")

getDayType("Sunday");     
getDayType("MONDAY");     
getDayType("tuesday");    
getDayType("Wednesday");  
getDayType("THURSDAY");   

getDayType("Bandarban");  
getDayType("Holiday");    