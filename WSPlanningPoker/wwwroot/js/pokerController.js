var pokerController =  planningPokerApp.controller('PokerController', ['PokerService',PokerController] );

function PokerController(PokerService){
    var self = this;
    self.mySelf = "";

    this.members = [];

    PokerService.getMembers(gotMembers);

    this.vote = function(){
        var whoVotes = self.mySelf;
        var voteData = self.members.filter( m=>m.name==whoVotes )[0];
        PokerService.Vote(voteData);
    }

    function gotMembers(response){
        self.members = response.data.members;
        self.mySelf = document.getElementById("my-self").value;
        console.log(response);
    }
}

/*
var uri = "ws://" + window.location.host + "/ws";
        function connect() {
            socket = new WebSocket(uri);
            socket.onopen = function(event) {
                console.log("opened connection to " + uri);
            };
            socket.onclose = function(event) {
                console.log("closed connection from " + uri);
            };
            socket.onmessage = function(event) {
                appendItem(list, event.data);
                console.log(event.data);
            };
            socket.onerror = function(event) {
                console.log("error: " + event.data);
            };
        }
        connect();
*/