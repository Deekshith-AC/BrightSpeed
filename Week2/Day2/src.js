var app = angular.module("myApp", []);
app.controller("myCtrl", [
    "$scope",
    "$location",
    function (s) {
        s.toggle1 = false;
        s.toggle2 = false;

        s.login = function () {
            s.toggle1 = true;
            s.toggle2 = false;
        };

        s.register = function () {
            s.toggle2 = true;
            s.toggle1 = false;
        };

        s.submit = function () {
            var obj = {};
            obj.name = s.name;
            obj.pass = s.pass;
            obj.email = s.email;
            console.log(obj);
        };
        
        s.submit2 = function () {
            var obj2 = {};
            obj2.userEmail = s.e;
            obj2.userPass = s.p;
            console.log(obj2);
        };
    },
]);