(function(){
    angular.module('ToDo')
    .factory('Item', item);

    function item($http){
        var link = 'http://secret-escarpment-99471.herokuapp.com/item';

        var service = {
			test: test,
            list: list,
            add: add,
            remove: remove,
            edit: edit
		};
		return service;

		function test(){
            return 'hello world';
		}

        function list(){
            return $http.get(link)
                .success(function(data){
                    return data;
                });
        }

        function add(newListItem){
            return $http.post(link, newListItem)
                .success(function(data){
                    return data;
                });
        }

        function remove(id){
            return $http.delete(link + '/' + id)
                .success(function(data){
                    return data;
                });
        }

        function edit(id, editListItem){
            return $http.put(link + '/' + id, editListItem)
                .success(function(data){
                    return data;
                });
        }
    }

})();
