(function(){
    angular.module('routerApp')
    .factory('Joke', joke);

    function joke($http){
        var link = 'http://api.icndb.com/jokes/random';
        var service = {
            getJoke: getJoke
		};
		return service;

        function getJoke(){
            return $http.get(link)
                .success(function(data){
                    return data;
                });
		}
    }

})();
