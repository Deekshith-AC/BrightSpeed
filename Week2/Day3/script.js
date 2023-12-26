var app = angular.module("myApp", []);
app.controller("myCtrl", [ "$scope","Service",function(s,Service){



    // $scope.selected = "name";
    // $scope.people = [
    //     { name: 'Alice', age: 25, location: 'New York' },
    //     { name: 'Bob', age: 30, location: 'Los Angeles' },
    //     { name: 'Charlie', age: 22, location: 'Chicago' },
    //     { name: 'David', age: 28, location: 'San Francisco' },
    //     { name: 'Emma', age: 27, location: 'Miami' },
    //     { name: 'Frank', age: 32, location: 'Seattle' },
    //     { name: 'Grace', age: 24, location: 'Boston' },
    //     { name: 'Hannah', age: 29, location: 'Denver' },
    //     { name: 'Isaac', age: 26, location: 'Austin' },
    //     { name: 'Julia', age: 31, location: 'Portland' },
    //     { name: 'Kevin', age: 23, location: 'Houston' },
    //     { name: 'Linda', age: 33, location: 'Atlanta' },
    //     { name: 'Michael', age: 28, location: 'San Diego' },
    //     { name: 'Nancy', age: 25, location: 'Philadelphia' },
    //     { name: 'Olivia', age: 30, location: 'Dallas' }
    //   ];









    $scope.submit = function(){
      var p = {}
      p.name = s.name
      p.pass = s.pass
      p.email = s.email
        Service.add(p)

    }

    $scope.getData = function(){
      console.log(Service.get())
    }













   

}])
