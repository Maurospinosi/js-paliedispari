// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
var domanda = prompt("Inserisci una parola");

console.log(domanda);

if(domanda == parola){
  console.log("La parola è palindroma");
}else{
  console.log("La parola non è palindroma");
}

function functionParolaCapo(stringa) {
  var stringaCapovolta = "";
  for (var i = stringa.length -1; i >= 0; i--){
    var stringaCapovolta = stringaCapovolta + stringa[i];
  }
  return stringaCapovolta;
}
var parola = functionParolaCapo(domanda);
console.log(parola);
