app.service("booksService", [
  "$http",
  "$window",
  "$location",
  function ($http, $window, $location) {

    // Redirecting part That Should be implemented in all services
    this.logoutService = function () {
      $window.localStorage.clear();
      $location.path("/");
    };

    //Searching book implemetation
    this.searchBooks = function (query) {
      return $http
        .get(`https://openlibrary.org/search.json?q=${query}&limit=30`)
        .then(function (response) {
          return response.data.docs;
        })
        .catch(function (error) {
          console.error("Error searching books:", error);
          throw error;
        })
    };
  },
]);
