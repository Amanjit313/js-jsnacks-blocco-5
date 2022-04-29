/* 

  - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

*/

const parola = "ciao";

function parolaAlContrario(str){

  return str.split("").reverse().join("");

}

console.log(parolaAlContrario(parola));

