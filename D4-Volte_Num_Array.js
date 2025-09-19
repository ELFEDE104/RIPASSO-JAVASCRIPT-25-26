// Importiamo il modulo 'readline' per gestire l'input da terminale
const readline = require('readline');

// Creiamo l'interfaccia per la lettura e scrittura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const NUMERI_TOTALI = 10;
const arrayDiNumeri = [];

console.log(`Per favore, inserisci ${NUMERI_TOTALI} numeri per riempire l'array.`);

// Funzione per chiedere i numeri e popolare l'array
function chiediNumeroPerArray() {
  if (arrayDiNumeri.length < NUMERI_TOTALI) {
    rl.question(`Inserisci il numero ${arrayDiNumeri.length + 1}/${NUMERI_TOTALI}: `, (input) => {
      const numero = parseFloat(input);
      if (isNaN(numero)) {
        console.log("Input non valido. Inserisci un valore numerico.");
        chiediNumeroPerArray();
      } else {
        arrayDiNumeri.push(numero);
        chiediNumeroPerArray();
      }
    });
  } else {
    // Una volta che l'array è pieno, chiedi quale numero cercare
    console.log("\nArray caricato correttamente.");
    chiediNumeroDaCercare();
  }
}

// Funzione per chiedere il numero da cercare e contarlo
function chiediNumeroDaCercare() {
  rl.question('Ora inserisci il numero che vuoi contare: ', (input) => {
    const num_cercato = parseFloat(input);

    if (isNaN(num_cercato)) {
      console.log("Input non valido. Inserisci un numero da cercare.");
      chiediNumeroDaCercare();
    } else {
      // Inizializza il contatore
      let conteggio = 0;

      // Esegui un ciclo FOR per scorrere l'array
      for (let i = 0; i < arrayDiNumeri.length; i++) {
        // Se l'elemento corrente è uguale al numero cercato
        if (arrayDiNumeri[i] === num_cercato) {
          // Incrementa il contatore
          conteggio = conteggio + 1;
        }
      }

      // Stampa il risultato finale
      console.log(`Il numero ${num_cercato} appare ${conteggio} volte.`);
      rl.close(); // Chiudi l'interfaccia e termina il programma
    }
  });
}

// Avviamo il processo chiamando la prima funzione
chiediNumeroPerArray();