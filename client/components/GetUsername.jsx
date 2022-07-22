const GetUsername = () => {
    let username = "";
  
    const getUsername = function() {
      return username;    // Or pull this from cookie/localStorage
    };
  
    const verifyUsername = function(name) {
      username = name;     
      // Also set this in cookie/localStorage
    };
  
    // return {
    //   getUsername: getUsername,
    //   verifyUsername: verifyUsername
    // }
  
  };
  
  export default GetUsername;