function toonAlertBox(){
    alert("Alert box opgeroepen door mijn eerste functie!");
}
toonAlertBox()

function zelfverzonnenNaam(){
    prompt("Mijn naam is ")
}
zelfverzonnenNaam()

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('heb jij bevestiging van je ouders?');
    }
  }
  let age = prompt('Hoe oud ben je?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}