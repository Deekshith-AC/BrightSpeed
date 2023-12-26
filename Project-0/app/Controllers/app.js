
var app = angular.module("app", ["ngRoute"]);
// Router
app.config(function ($routeProvider) {
  // console.log("Route");
  $routeProvider
    .when("/", {
      templateUrl: "../app/Views/login.html",
      controller: "loginCtrl",
    })
    .when("/register", {
      templateUrl: "../app/Views/register.html",
      controller: "registerCtrl",
    })
    .when("/books", {
      templateUrl: "../app/Views/books.html",
      controller: "booksCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
});
