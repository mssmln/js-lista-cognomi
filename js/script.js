// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, per via dell'ordinazione del codice ascii, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova
//


// ask user his or her surname and capitalize the first letter
var userSurname = prompt('type down your surname capitalized please');
userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1);
console.log(userSurname);




// array containing all surnames and whichever just keyed in
var allSurname = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(allSurname);
allSurname.push(userSurname);
console.log(allSurname.length);


// print the entire array out alphabetically
