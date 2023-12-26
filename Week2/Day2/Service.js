app.service("Service",["$http",function($http){

    this.get = function(cb){
        $http({
            method : "GET",
            url : "http://localhost:3000/posts"
        })
        .then(function(response){cb(response.data)},function(error) {console.error(error)})
    }

    this.add = function(Data){
        $http({
            method : "POST",
            url : "http://localhost:3000/posts",
            data: Data
        })
        .then(function(response){console.log(response);},function(error) {console.error(error)})
    }

}])