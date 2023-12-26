var app = angular.module("myApp", []);

app.controller("myCtrl",[
    "$scope", "Service",
    function (s, Service) {
        s.m = false;
        
        s.submit = function () {
            var obj = {};
            obj.name = s.name;
            obj.pass = s.pass;
            obj.email = s.email;
            Service.add(obj);
        };

        s.submit2 = function () {
            var obj2 = {};
            obj2.userEmail = s.e;
            obj2.userPass = s.p;
            Service.get(verfy, obj2);
        };

        let verfy = function (data) {
            console.log(data);

            data.forEach(element => {
                console.log(s.m);
                if(s.e === element.name && s.p === element.pass){
                    s.m = true
                    console.log(s.m);
                } 
            });
            
        }
    }]
);