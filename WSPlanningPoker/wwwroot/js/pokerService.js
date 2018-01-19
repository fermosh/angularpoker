var pokerService =  planningPokerApp.factory('PokerService', ['$http',PokerService]);

function PokerService($http){
    this.getMembers = function(GotMembers){
        $http.get('/Home/GetData').then(GotMembers, FailHandler);
    }
    this.Vote = function( voteData ){
        $http.get('/Home/Vote?name='+voteData.name+'&vote='+voteData.vote);
    }
    return {
        getMembers: this.getMembers,
        Vote: this.Vote
    };

    function FailHandler(response){
        console.log(response);
    }
}


