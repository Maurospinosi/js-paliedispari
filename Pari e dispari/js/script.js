// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var paridispari = prompt("Pari o dispari?");
if (paridispari == "pari" || paridispari == "dispari"){
  var uno_cinque = parseInt(prompt("Inserisci un numero da 1 a 5"));
   if (uno_cinque == 1){
     // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
     function functionNum(num) {
       var num_pc = parseInt(Math.floor(Math.random() * 6) + 1);
       return num_pc;
     }

     var numCasuale = functionNum();
     alert("Il numero casuale del computer è" + " " + numCasuale);

     // Sommiamo i due numeri
       var somma = parseInt(uno_cinque + numCasuale);
       alert("La somma del numero estratto dal Pc e del numero scelto dall'utente è" + " " + somma);

     // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
     function functionPari(x) {
        var pari = somma % 2 ==0;
        return pari;
     }
     var si = functionPari(somma);
     function functionDispari(y) {
        var dispari = somma % 2 ==1;
        return dispari;
     }
     var no = functionDispari(somma);

     // Dichiariamo chi ha vinto.
      if(paridispari == "pari" && si ){
        alert("La somma dei due numeri è pari : Hai vinto!");
      } else if (paridispari == "dispari" && no){
        alert("La somma dei due numeri è dispari : Hai vinto!");
      } else {
        alert("hai perso..... :( ");
      }
   } else if (uno_cinque == 2){
     // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
     function functionNum(num) {
       var num_pc = parseInt(Math.floor(Math.random() * 6) + 1);
       return num_pc;
     }

     var numCasuale = functionNum();
     alert("Il numero scelto dal computer è" + " " + numCasuale);

     // Sommiamo i due numeri
       var somma =  parseInt(uno_cinque + numCasuale);
       alert("La somma del numero estratto dal Pc e del numero scelto dall'utente è" + " " + somma);

       // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
       function functionPari(x) {
          var pari = somma % 2 ==0;
          return pari;
       }
       var si = functionPari(somma);
       function functionDispari(y) {
          var dispari = somma % 2 ==1;
          return dispari;
       }
       var no = functionDispari(somma);

       // Dichiariamo chi ha vinto.
        if(paridispari == "pari" && si ){
          alert("La somma dei due numeri è pari : Hai vinto!");
        } else if (paridispari == "dispari" && no){
          alert("La somma dei due numeri è dispari : Hai vinto!");
        } else {
          alert("hai perso..... :( ");
        }
   } else if (uno_cinque == 3){
      // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
      function functionNum(num) {
        var num_pc = parseInt(Math.floor(Math.random() * 6) + 1);
        return num_pc;
      }

      var numCasuale = functionNum();
      alert("Il numero scelto dal computer è" + " " + numCasuale);

      // Sommiamo i due numeri
        var somma = parseInt(uno_cinque + numCasuale);
        alert("La somma del numero estratto dal Pc e del numero scelto dall'utente è" + " " + somma);

        // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        function functionPari(x) {
           var pari = somma % 2 ==0;
           return pari;
        }
        var si = functionPari(somma);
        function functionDispari(y) {
           var dispari = somma % 2 ==1;
           return dispari;
        }
        var no = functionDispari(somma);

        // Dichiariamo chi ha vinto.
         if(paridispari == "pari" && si ){
           alert("La somma dei due numeri è pari : Hai vinto!");
         } else if (paridispari == "dispari" && no){
           alert("La somma dei due numeri è dispari : Hai vinto!");
         } else {
           alert("hai perso..... :( ");
         }
   } else if (uno_cinque == 4){
      // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
      function functionNum(num) {
        var num_pc = parseInt(Math.floor(Math.random() * 6) + 1);
        return num_pc;
      }

      var numCasuale = functionNum();
      alert("Il numero scelto dal computer è" + " " + numCasuale);

      // Sommiamo i due numeri
        var somma = parseInt(uno_cinque + numCasuale);
        alert("La somma del numero estratto dal Pc e del numero scelto dall'utente è" + " " + somma);

        // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        function functionPari(x) {
           var pari = somma % 2 ==0;
           return pari;
        }
        var si = functionPari(somma);
        function functionDispari(y) {
           var dispari = somma % 2 ==1;
           return dispari;
        }
        var no = functionDispari(somma);

        // Dichiariamo chi ha vinto.
         if(paridispari == "pari" && si ){
           alert("La somma dei due numeri è pari : Hai vinto!");
         } else if (paridispari == "dispari" && no){
           alert("La somma dei due numeri è dispari : Hai vinto!");
         } else {
           alert("hai perso..... :( ");
         }
   }else if (uno_cinque == 5){
      // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
      function functionNum(num) {
        var num_pc = parseInt(Math.floor(Math.random() * 6) + 1);
        return num_pc;
      }

      var numCasuale = functionNum();
      alert("Il numero scelto dal computer è" + " " + numCasuale);

      // Sommiamo i due numeri
        var somma = parseInt(uno_cinque + numCasuale);
        alert("La somma del numero estratto dal Pc e del numero scelto dall'utente è" + " " + somma);

        // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        function functionPari(x) {
           var pari = somma % 2 ==0;
           return pari;
        }
        var si = functionPari(somma);
        function functionDispari(y) {
           var dispari = somma % 2 ==1;
           return dispari;
        }
        var no = functionDispari(somma);

        // Dichiariamo chi ha vinto.
         if(paridispari == "pari" && si ){
           alert("La somma dei due numeri è pari : Hai vinto!");
         } else if (paridispari == "dispari" && no){
           alert("La somma dei due numeri è dispari : Hai vinto!");
         } else {
           alert("hai perso..... :( ");
         }
   } else {
      alert("Errore");
    }
}else {
  alert("Errore");
}
