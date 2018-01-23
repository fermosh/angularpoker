var pokerService =  planningPokerApp.factory('PokerService', ['$http',PokerService]);

function PokerService($http){
    var self = this;
    this.getMembers = function(GotMembers){
        $http.get('/Home/GetData').then(GotMembers, FailHandler);
    }

    this.ws = null;
    this.uri = "ws://" + window.location.host + "/ws";

    this.connect = function (MesssageFromServer) {
        socket = new WebSocket(self.uri);
        socket.onopen = function(event) {
            console.log("opened connection to " + self.uri);
        };
        socket.onclose = function(event) {
            console.log("closed connection from " + self.uri);
        };
        socket.onmessage = function(event) {
            MesssageFromServer(event.data);
            console.log(event.data);
        };
        socket.onerror = function(event) {
            console.log("error: " + event.data);
        };
    }


    this.Vote = function( voteData ){
        $http.get('/Home/Vote?name='+voteData.name+'&vote='+voteData.vote);
    }
    return {
        getMembers: this.getMembers,
        Vote: this.Vote,
        connect:this.connect
    };

    function FailHandler(response){
        console.log(response);
    }

}


