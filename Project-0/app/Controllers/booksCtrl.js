app.controller("booksCtrl", [
  "$scope",
  "booksService",
  "$window",
  function (sc, booksService, $window) {
    //First code that shouls be implemented in all Controllers
    if ($window.localStorage.getItem("user") == null) {
      booksService.logoutService();
    }

    //Logout Implementation
    sc.logout = function () {
      console.log("I am logged out");
      booksService.logoutService();
    };
    //Fetching User Name From Local Storage
    sc.UserDisplyName = JSON.parse(
      $window.localStorage.getItem("user")
    ).fullName;

    //The Input Search Box is Initialized to null
    sc.searchBook = "";
    sc.searchedBookResult = [];

    // Calling the serach Service method from Service and loading screen
    sc.searchBookFun = function () {
      sc.isLoading = true;
      sc.displaySearch = false;
      if (sc.searchBook) {
        console.log("Searching Book function entered in Controller");
        console.log(sc.searchBook);

        booksService
          .searchBooks(sc.searchBook)

          .then(function (searchedBookResult) {
            sc.searchedBookResult = searchedBookResult;
            console.log(sc.searchedBookResult);
            sc.displaySearch = true;
            sc.isLoading = false;
          })

          .catch(function (error) {
            sc.searchedBookResult.push({
              title:
                "Sorry There is SomeThing Error in Finding Book You Searched",
            });
            console.error("Error", error);
          })
          
          .finally(function () {
            sc.searchBook = "";
          });
      }
    };
  },
]);
