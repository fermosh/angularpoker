var pokerController =  planningPokerApp.controller('PokerController', ['PokerService','$scope',PokerController] );

function PokerController(PokerService,$scope){
    var self = this;
    self.mySelf = "";

    this.members = [];

    PokerService.getMembers(gotMembers);
    PokerService.connect(messageFromServer);

    this.vote = function(){
        var whoVotes = self.mySelf;
        var voteData = self.members.filter( m=>m.name==whoVotes )[0];
        PokerService.Vote(voteData);
    }
    function messageFromServer(message){
        members = self.members;
        message = JSON.parse(message.replace(/'/g,'"'));
        if(message.name && typeof(message.vote)!='undefined'){
            for(var i = 0 ; i < members.length ; i++){
                if(members[i].name == message.name){
                    members[i].voted = 'voted';
                    members[i].vote = message.vote;
                    $scope.$apply();
                    return;
                }
            }
        }
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