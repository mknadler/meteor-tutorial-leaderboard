// intentionally omitting 'var' for global scope
PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){

  Template.leaderboard.events({
    'click .player': function(){
      console.log("Clicked"); 
    }

  });

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'numPlayers': function(){
      return PlayersList.find().count();
    }
  });

}

if (Meteor.isServer){

}