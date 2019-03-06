$(document).ready( function() {
var randomAnswer = undefined
arrChoice = ["rock", "paper", "scissors"]


$("#choice-one").on("click", function(){
  randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  switch (randomAnswer) {
    
    case "scissors":
      resultsWin()   //.html('<h2>Scissors, You WIN!</h2>')
      break;
    case "paper":
      resultsLose()
      break;
    case "rock":
      resultsBust()
  } 
})

$("#choice-two").on("click", function(){
  randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  switch (randomAnswer) {
    case "rock":
    resultsWin();
      break;
    case "scissors":
    resultsLose();
      break;
    case "paper":
    resultsBust()
  } 
})

$("#choice-three").on("click", function(){
  randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  switch (randomAnswer) {
    case "paper":
    resultsWin();
      break;
    case "rock":
    resultsLose();
      break;
    case "scissors":
    resultsBust()
  } 
})
function resultsWin() {
  $('div.results').html(function() {
  return "<h2>" + randomAnswer + ", You WIN!</h2>"
})
  .css({
    backgroundColor: '#bca',
    width: '100%',
    border: '1px solid green',
    textAlign: 'center',
    marginBottom: '25px'
  })
}

function resultsLose() {
  $('div.results').html(function(){
    return "<h2>" + randomAnswer + ", Wow, you really suck at this!</h2>"
  })
  .css({
    backgroundColor: '#bca',
    width: '100%',
    border: '1px solid green',
    textAlign: 'center',
    marginBottom: '25px'
  })
}

function resultsBust() {
  $('div.results').html(function() {
  return "<h2>" + randomAnswer + ", Bust, try again.</h2>"
  })
  .css({
    backgroundColor: '#bca',
    width: '100%',
    border: '1px solid green',
    textAlign: 'center',
    marginBottom: '25px'
  })
}
})



