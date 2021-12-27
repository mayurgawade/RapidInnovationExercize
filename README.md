# RAPID_INNOVATION_CODING_ROUND
In this repository I have wrote API's to getAllPlayersDetails, post playerdetails, getPlayersByCoach and get playerdetail by playername or sport.

consider we have table name 'players'

like players = [
  {
  coach : 'mayur',
  sport: 'cricket',
  playerDetails: [{
  "playerName": "Mangesh Datar",
  "matchesPlayed": 102,
  "matchesWon": 66,
  "matchesLost": 46
  }]

}
]

we need following endpoints 
GET /players/  => admin getAllPlayersDetails
POST /players/ => post playerdetails
GET /players/:coachName => coach getPlayersByCoach
GET /players/Ronaldo?playerName=messi&sport=football  => get playerdetail by playername or sport

- Setup and Installation:-

NodeJS and NPM version requirement

$npm --version
NodeJs version requirement: v8.9.4


$ node --version
NPM version requirement: v5.6.0

- Run and test

 $ git clone https://github.com/mayurgawade/RapidInnovationExercize.git
 
 $ npm install
 
 $ npm start
 