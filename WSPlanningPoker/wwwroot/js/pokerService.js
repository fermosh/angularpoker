var pokerService =  planningPokerApp.factory('PokerService', ['$http',PokerService]);

function PokerService($http){
    this.getMembers = function(GotMembers){
        $http.get('/Home/GetData').then(GotMembers, FailHandler);
    }

    return {
        getMembers: this.getMembers
    };

    function FailHandler(response){
        console.log(response);
    }
}


