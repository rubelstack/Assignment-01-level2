const validateUsername = (username) =>  username.length < 4  ? "Too Short" :  username.includes(" ")
      ? "No Space Allowed" : username.toLowerCase().includes("admin")
        ? "Reserved Word" : "Available";