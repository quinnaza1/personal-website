// HTML Element IDs
const crapsusernameinput = "craps-username-input"
const crapsregistrationpane = "craps-registration-pane"
const crapsmainsection = "craps-main-section"


function registerCrapsPlayer () {
    let crapsusername = document.getElementById(crapsusernameinput).value
    
// Username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsusername.length < 5 || firstCharIsDigitRegex.test(crapsusername)) {
      alert("Username must be at least 5 characters long, alphanumeric an underscore only, no spaces and cannot start with a number")
    } else {
      removeRegistrationPane()
      showMeinGameSection()
}


  }  
  function removeRegistrationPane () {
    document.getElementById(crapsregistrationpane).style.display = "none"
  }
  function showMeinGameSection () {
    document.getElementById(crapsmainsection).style.display = "block"

  }
