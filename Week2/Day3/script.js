var app = angular.module("myApp", []);
app.controller("myCtrl", [ "$scope",function(s){
    s.currentDate = new Date


    s.arr = ["abc", "pqr","def", "ghi", "jkl", "mno"]

}])
