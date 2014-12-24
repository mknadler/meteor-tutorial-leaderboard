// intentionally omitting 'var' for global scope
PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){

  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'numPlayers': function(){
      return PlayersList.find().count();
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if (playerId === selectedPlayer) {
        return "selected"
      }
    }
  });

}

if (Meteor.isServer){

}