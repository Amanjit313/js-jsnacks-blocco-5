/* 

  - Crea 10 oggetti che rappresentano una zucchina.
  - Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
  - Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/
const shortZucchine = [];
const longZucchine = [];

const zucchine = [

  {
    varietà: "Striata d’Italia",
    peso: "200",
    lunghezza: "10",
  },

  {
    varietà: "Nera di Milano",
    peso: "180",
    lunghezza: "9",
  },

  {
    varietà: "Fiorentina",
    peso: "150",
    lunghezza: "14",
  },

  {
    varietà: "Zucchino siciliano",
    peso: "100",
    lunghezza: "21",
  },

  {
    varietà: "Striata di Napoli",
    peso: "250",
    lunghezza: "19",
  },

  {
    varietà: "Zucchina bianca triestina",
    peso: "190",
    lunghezza: "10",
  },

  {
    varietà: "Sechio o zucchina centenaria",
    peso: "110",
    lunghezza: "8",
  },

  {
    varietà: "Tonda di Nizza",
    peso: "110",
    lunghezza: "15",
  },

  {
    varietà: "Tonda di Piacenza",
    peso: "140",
    lunghezza: "20",
  },

  {
    varietà: "Zucchina genovese",
    peso: "210",
    lunghezza: "10",
  }
];

for(let [i] in zucchine){
  const tipiDiZucchine = zucchine[i];
  console.log("Varietà: " + tipiDiZucchine.varietà);
  console.log("Peso: " + tipiDiZucchine.peso + " grammi");
  console.log("Lunghezza: " + tipiDiZucchine.lunghezza + " centrimetri");
  console.log("------------------------------------------");

  // Dividi in due array separati le zucchine che misurano meno o più di 15cm
  zucchine[i] = ( tipiDiZucchine.lunghezza >= 15 ) ? longZucchine.push( tipiDiZucchine.varietà ) : shortZucchine.push( tipiDiZucchine.varietà );
  
  // Stampa separatamente quanto pesano i due gruppi di zucchine
  sommalongZucchine = somma += parseInt();
}

console.log("Zucchina Lunga: " + longZucchine);
document.getElementById( "zucchina-lunga" ).innerHTML = "Lista delle Zucchine che sono dai 15 centrimetri in su: " + longZucchine;

console.log( "Zucchina Corta: " + shortZucchine );
document.getElementById( "zucchina-corta" ).innerHTML = "Lista delle Zucchine che sono dai 14 centrimetri in giù: " + shortZucchine;

