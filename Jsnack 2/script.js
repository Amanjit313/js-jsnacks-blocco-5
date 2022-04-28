/* 

  - Crea 10 oggetti che rappresentano una zucchina.
  - Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
  - Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/
const longZucchine = [];
const shortZucchine = [];

const longPesoZucchine = [];
const shortPesoZucchine = [];
sommalongZucchine = 0;
sommashortZucchine = 0;

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

  // Divido in due array gli elementi sopra i 15cm e quelli sotto e gli pusho
  zucchine[i] = ( tipiDiZucchine.lunghezza >= 15 ) ? longZucchine.push( tipiDiZucchine.varietà ) : shortZucchine.push( tipiDiZucchine.varietà );
  
  // Faccio la stessa cosa ma creo un array a parte elencando i pesi dei miei elementi tra il primo array e il secondo
  zucchine[i] = ( tipiDiZucchine.lunghezza >= 15 ) ? longPesoZucchine.push( tipiDiZucchine.peso ) : shortPesoZucchine.push( tipiDiZucchine.peso );
}

// Creo la funzione per sommarmi il peso degli elementi dentro i miei due array
function getSum(total, longPesoZucchine) {
  return total + Math.round(longPesoZucchine);
}

function getSum(total, shortPesoZucchine) {
  return total + Math.round(shortPesoZucchine);
}

// Stampo i miei risultati

// Stampo la lista delle zucchine dai 15cm in su
document.getElementById( "zucchina-lunga" ).innerHTML = "Lista delle Zucchine che sono dai 15 centrimetri in su: " + longZucchine;

document.getElementById( "zucchina-corta" ).innerHTML = "Lista delle Zucchine che sono dai 14 centrimetri in giù: " + shortZucchine;


// Stampo la lista del peso totale delle zucchine lunghe
document.getElementById("zucchina-peso-lunga").innerHTML = "Il peso totale del gruppo delle Zucchine lunghe è: " + longPesoZucchine.reduce(getSum, 0) + " grammi";

// Stampo la lista del peso totale delle zucchine corte
document.getElementById("zucchina-peso-corto").innerHTML = "Il peso totale del gruppo delle Zucchine corte è: " + shortPesoZucchine.reduce(getSum, 0) + " grammi";