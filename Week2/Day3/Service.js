app.service("Service",function(){

    let n = []

    this.add = function(data){
        n.push(data)
    }

    this.get = function(){
        return n
    }

})