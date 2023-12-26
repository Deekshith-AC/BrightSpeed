app.service("registerService", function ($http, $location) {
  

    // Redirect: To movies page
    this.goTobooks = function () {
      $location.path("/books");
    };

    // Redirect: To LogIn page
    this.redirectToLogin = function() {
      console.log("Redirecting to logIn page");
      $location.path("/");
  };


  
    // Fetch all the registered users.
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
  
    // Add a User.
    this.addUser = (user) => {
      $http({
        method: "POST",
        url: "http://localhost:3000/users",
        data: user,
      }).then(
        function (response) {
          console.log("Add User - response: ", response);
        },
        function (error) {
          console.log("Add User - Error: ", error);
        }
      );
    };
  });
  