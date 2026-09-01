const validateUsername = (username) =>  username.length < 4  ? "Too Short" :  username.includes(" ")
      ? "No Space Allowed" : username.toLowerCase().includes("admin")
        ? "Reserved Word" : "Available";

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
