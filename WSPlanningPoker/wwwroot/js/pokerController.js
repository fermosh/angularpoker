var pokerController =  planningPokerApp.controller('PokerController', ['PokerService',PokerController] );

function PokerController(PokerService){
    var self = this;
    this.members = [];

    PokerService.getMembers(gotMembers);

    function gotMembers(response){
        self.members = response.data.members;
        console.log(response.data.members);
    }
}

