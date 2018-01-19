var pokerController =  planningPokerApp.controller('PokerController', ['PokerService',PokerController] );

function PokerController(PokerService){
    var self = this;
    self.mySelf = "";

    this.members = [];

    PokerService.getMembers(gotMembers);

    function gotMembers(response){
        self.members = response.data.members;
        self.mySelf = document.getElementById("my-self").value;
        console.log(response);
    }
}

