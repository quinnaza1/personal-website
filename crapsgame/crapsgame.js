// Craps Main Data
let crapsusername = "";

//Craps Game Settings
const startingMoney = 1000;
const startingRounds = 0;

// HTML Element IDs
const crapsusernameinput = "craps-username-input"
const crapsregistrationpane = "craps-registration-pane"
const crapsmainsection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"

// In-game variable
let currentMoney = startingMoney
let currentRounds = startingRounds

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
    
  }


  function setMoney (money) {
    document.getElementById(crapsStatsMoney).innerHTML = money
  }

  function setRounds (round) {
    document.getElementById(crapsStatsRounds).innerHTML = round
  }