// Importiamo il modulo 'readline' per gestire l'input da terminale
const readline = require('readline');

// Creiamo l'interfaccia per la lettura e scrittura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Procedura che riceve un array e stampa il suo contenuto.
 * @param {Array<number>} arrayDaStampare L'array contenente i numeri da stampare.
 */
function stampaArray(arrayDaStampare) {
  console.log("\n--- Contenuto Array ---");
  
  // Eseguiamo un ciclo for per iterare su ogni elemento dell'array ricevuto
  for (let i = 0; i < arrayDaStampare.length; i++) {
    console.log(`Elemento in posizione ${i}: ${arrayDaStampare[i]}`);
  }

  console.log("-----------------------");
}

// --- Parte principale del programma ---

// Decidiamo quanti numeri chiedere all'utente
const NUMERI_TOTALI = 5; 
const arrayDiNumeri = [];

console.log(`Inserisci ${NUMERI_TOTALI} numeri, uno per volta.`);

// Funzione per chiedere i numeri e popolare l'array
function chiediNumero() {
  if (arrayDiNumeri.length < NUMERI_TOTALI) {
    rl.question(`Inserisci il numero ${arrayDiNumeri.length + 1}/${NUMERI_TOTALI}: `, (input) => {
      const numero = parseFloat(input);

      if (isNaN(numero)) {
        console.log("Input non valido. Per favore, inserisci un valore numerico.");
        chiediNumero();
      } else {
        // LEGGI ARRAY[I] -> Aggiungiamo il numero all'array
        arrayDiNumeri.push(numero);
        chiediNumero();
      }
    });
  } else {
    // Una volta che l'array è pieno, chiudiamo l'input
    console.log("\nArray caricato correttamente.");
    rl.close();
    
    // E ora chiamiamo la procedura per stamparlo
    stampaArray(arrayDiNumeri);
  }
}

// Avviamo il processo chiamando la funzione per la prima volta
chiediNumero();