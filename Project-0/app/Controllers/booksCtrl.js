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

    //Sorting Function
    sc.sortValue = "";
    sc.sortingDD = false;

    sc.SortingFun = function () {
      console.log(sc.selectedItem);
      if (sc.selectedItem == "Title") {
        sc.sortValue = "title";
      } else if (sc.selectedItem == "Author Name") {
        sc.sortValue = "author_name[0]";
      } else if (sc.selectedItem == "Year") {
        sc.sortValue = "publish_year[0]";
      } else if (sc.selectedItem == "Rating") {
        sc.sortValue = "ratings_average";
      }
    };

    //Filtering Function
    sc.filterValue = "";
    sc.selectFltr = "";
    sc.filteringDD = false;

    sc.FilterFun = function (value) {

      sc.FilteredNewArray = []
      sc.searchedBookResult.forEach(element => {
        sc.ResultEachObj = element.subject
        sc.ResultEachObj.forEach( sub => {
          if(value == sub){
            
          }
        } );
        
      });



















      console.log(sc.selectFltr);
      if (sc.selectFltr == "History") {
        sc.filterValue = "history";
      } else if (sc.selectFltr == "Fiction") {
        sc.filterValue = "fiction";
      } else if (sc.selectedItem == "Mystery") {
        sc.filterValue = "mystery";
      } else if (sc.selectedItem == "Horror") {
        sc.filterValue = "horror";
      } else if (sc.selectedItem == "Finance") {
        sc.filterValue = "finance";
      }
    };

    // Calling the serach Service method from Service
    sc.sortValue = "";

    sc.searchBookFun = function () {
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
            //Sort
            sc.sortingDD = true;
            sc.Sitems = ["Title", "Author Name", "Year", "Rating"];
            sc.selectedItem = "Title";
            //filter
            sc.filteringDD = true;
            sc.Fitems = ["History", "Fiction", "Mystery", "Finance", "Horror"];
            sc.filterValue = "";
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
