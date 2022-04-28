/* 

  - Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
  - Calcola quanto pesano tutte le zucchine.

*/

let somma = 0;
const zucchine = [

  {
    varietà: "Striata d’Italia",
    peso: "200",
    lunghezza: "1",
  },

  {
    varietà: "Nera di Milano",
    peso: "180",
    lunghezza: "0,9",
  },

  {
    varietà: "Fiorentina",
    peso: "150",
    lunghezza: "1,4",
  },

  {
    varietà: "Zucchino siciliano",
    peso: "100",
    lunghezza: "2,1",
  },

  {
    varietà: "Striata di Napoli",
    peso: "250",
    lunghezza: "1,9",
  },

  {
    varietà: "Zucchina bianca triestina",
    peso: "190",
    lunghezza: "1",
  },

  {
    varietà: "Sechio o zucchina centenaria",
    peso: "110",
    lunghezza: "0,8",
  },

  {
    varietà: "Tonda di Nizza",
    peso: "110",
    lunghezza: "1,5",
  },

  {
    varietà: "Tonda di Piacenza",
    peso: "140",
    lunghezza: "2",
  },

  {
    varietà: "Zucchina genovese",
    peso: "210",
    lunghezza: "1",
  }
];

for(let [i] in zucchine){
  const tipiDiZucchine = zucchine[i];
  console.log("Varietà: " + tipiDiZucchine.varietà);
  console.log("Peso: " + tipiDiZucchine.peso + " grammi");
  console.log("Lunghezza: " + tipiDiZucchine.lunghezza + " centrimetri");
  console.log("------------------------------------------");
  somma = somma += parseInt(tipiDiZucchine.peso);
/*   console.log("In totale siamo a " + somma + " grammi di peso");
  console.log("------------------------------------------"); */
}

/* console.log(somma); */
document.querySelector(".somma-zucchine").innerHTML = "In totale siamo a " + somma + " grammi di peso";