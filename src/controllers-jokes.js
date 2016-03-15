(function(){
    angular.module('routerApp')
    .controller('Jokes', ['Joke', 'jokeInit', jokesCtrl]);

    function jokesCtrl(Joke, jokeInit){
        var self = this;

        // alert ('Is anybody home?');

        //LOCAL VARIABLES//

        //BOUND FUNCTIONS//
        self.getNew = getNew;

        //BOUND VALUES//
        self.jokeObject = {};

        //BOUND FUNCTION IMPLEMENTATIONS//
        
        // Joke.getJoke().then(function(response){
        //     self.jokeObject = response.data;
        //     for (i=0; i<10; i++){
        //         self.jokeObject.value.joke = self.jokeObject.value.joke.replace("&quot;", "\"");
        //     }
        // });

        self.jokeObject = jokeInit.data;
        for (i=0; i<10; i++){
                self.jokeObject.value.joke = self.jokeObject.value.joke.replace("&quot;", "\"");
            }

        function getNew(){
            Joke.getJoke().then(function(response){
                self.jokeObject = response.data;
                for (i=0; i<10; i++){
                    self.jokeObject.value.joke = self.jokeObject.value.joke.replace("&quot;", "\"");
                }
            });
        }

        //HELPER FUNCTIONS//

    }

})();
