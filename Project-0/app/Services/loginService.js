app.service("loginService", function ($http, $location) {

    // Redirect: To movies page
    this.goTobooks = function () {
      console.log("logSer");
      $location.path("/books");
    };

    // Redirect: To Register page
    this.redirectToRegister = function() {
      // console.log("Redirecting to register page");
      $location.path("/register");
  };
  
    // Fetch all the registered users
    this.getUsers = (any) => {
      $http({
        method: "GET",
        url: "http://localhost:3000/users",
      }).then(
        function (response) {
          any(response.data);
        },
        function (error) {
          console.log("Get Users - Error: ", error);
        }
      );
    };
  });
  