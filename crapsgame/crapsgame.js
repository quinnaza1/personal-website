// HTML Element IDs
const crapsusernameinput = "craps-username-input"
const crapsregistrationpane = "craps-registration-pane"
const crapsmainsection = "craps-main-section"


function registerCrapsPlayer () {
    let crapsusername = document.getElementById(crapsusernameinput).value
    alert("Got: " + crapsusername)
    removeRegistrationPane()
    showMeinGameSection()
  }  
  function removeRegistrationPane () {
    document.getElementById(crapsregistrationpane).style.display = "none"
  }
  function showMeinGameSection () {
    document.getElementById(crapsmainsection).style.display = "block"

  }
