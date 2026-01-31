// Craps Main Data
let crapsusername = "";

//Craps Game Settings
const startingMoney = 1000;
const startingRounds = 0;
const bets ={
  even: "EVEN",
  odd: "ODD"
  }
const minimumBet = 100

// HTML Element IDs
const crapsusernameinput = "craps-username-input"
const crapsregistrationpane = "craps-registration-pane"
const crapsmainsection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"
const crapsUserBetAmount = "craps-user-bet-amount"
const crapsRollDiceButton = "craps-roll-dice-button"
const crapsRollDiceAnimationContainer = "craps-roll-dice-animation-container"

// In-game variable
let currentMoney = startingMoney
let currentRounds = startingRounds
let currentBet = bets.even
let currentBetAmount = minimumBet

function registerCrapsPlayer () {

    crapsusername = document.getElementById(crapsusernameinput).value
    
// Username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsusername.length < 5 || firstCharIsDigitRegex.test(crapsusername)) {
      alert("Username must be at least 5 characters long, alphanumeric an underscore only, no spaces and cannot start with a number")
    } else {
      removeRegistrationPane()
      showMeinGameSection()
      setupFirstRound()
}     
  }  
 
  function removeRegistrationPane () {
    document.getElementById(crapsregistrationpane).style.display = "none"
  }
  function showMeinGameSection () {
    document.getElementById(crapsmainsection).style.display = "block"

  }

  function setupFirstRound () {
    document.getElementById(crapsStatsUsername).innerHTML = crapsusername
    currentMoney = startingMoney
    currentRounds = startingRounds
    setMoney(startingMoney)
    setRounds(startingRounds)
    betEven()
    setBetAmount(minimumBet)
  }


  function setMoney (money) {
    document.getElementById(crapsStatsMoney).innerHTML = money
  }

  function setRounds (round) {
    document.getElementById(crapsStatsRounds).innerHTML = round
  }
  
  function betEven () {
    chooseBet(bets.even)
  }

  function betOdd () {
    chooseBet(bets.odd)
  }

  function chooseBet (bet) {
    currentBet = bet
    document.getElementById(bet).style.backgroundColor = "red"
    const deselectBet = bet == bets.even ? bets.odd : bets.even
    document.getElementById(deselectBet).style.backgroundColor = "transparent"
    
  }

  function increaseBet () {
    setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney))
  }

   function decreaseBet () {
   setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet))
  }
    

 function setBetAmount (betAmount) {
  currentBetAmount = betAmount
  document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
  
 }
 function rollDice () {
  document.getElementById(crapsRollDiceButton).style.display = "none"
  const diceRollElement = document.getElementById(crapsRollDiceAnimationContainer)
  rollADie({ element: diceRollElement, numberOfDice: 2, callback: processDiceResult, delay: 1000000 });
 }
 function processDiceResult (diceResult) {
    console.log(diceResult)
 }