(function(){
    angular.module('routerApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/todo');

        $stateProvider

        .state('todo', {
            url: '/todo',
            templateUrl: 'views/todo.html',
            controller: 'ToDo as td',
            resolve:{
                itemsList: function(Item){
                    return Item.list();
                }
            }
        })

        .state('jokes', {
            url: '/jokes',
            templateUrl: 'views/jokes.html',
            controller: 'Jokes as jk',
            resolve:{
                jokeInit: function(Joke){
                    return Joke.getJoke();
                }
            }
        });
    });

})();
