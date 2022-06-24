//User input
let ChoiceA = "Scissor"
let ChoiceB = "Rock"
//will need to pass those yourself to play

//Outcme Matrix
const Outcome = {
    'rr': 'Draw', 'ss': 'Draw', 'pp': 'Draw',
    'rp': 'Loss', 'sr': 'Loss', 'ps': 'Loss',
    'rs': 'Win', 'pr': 'Win', 'sp': 'Win'
};
//This outcome matrix returns a result based on the left players point of view
//so by simply putting the second player first you get the inverse result
//Make sure that this is defined at the initialization of the rock paper scissor game
//You do not want to be redfining this every round, since this does not change

//Result resolution
console.log(Outcome[(ChoiceA[0]+ChoiceB[0]).toLowerCase()] ?? "Input Error")
//take the first letter of both players choices, then combine them and make them lowercase
//then try to access the pair of the combined choices
// for example Rock vs Scissor would boil down into Choice[rs] if you want player 1s result and Choice[sr] if you want player 2s result
