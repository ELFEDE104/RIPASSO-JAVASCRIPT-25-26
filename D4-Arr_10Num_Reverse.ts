// Importiamo il modulo 'readline' per gestire l'input da terminale
const readline = require('readline');

// Creiamo l'interfaccia per la lettura e scrittura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definiamo quanti numeri vogliamo caricare
const NUMERI_TOTALI = 10;
// Creiamo l'array vuoto che conterrà i numeri
const arrayDiNumeri: any[] = [];

console.log(`Inserisci ${NUMERI_TOTALI} numeri, uno per volta.`);

// Funzione per chiedere un numero all'utente
function chiediNumero() {
  // Controlliamo se abbiamo già raccolto tutti i numeri
  if (arrayDiNumeri.length < NUMERI_TOTALI) {
    // Se non li abbiamo tutti, chiediamo il prossimo
    rl.question(`Inserisci il numero ${arrayDiNumeri.length + 1}/${NUMERI_TOTALI}: `, (input) => {
      const numero = parseFloat(input);

      // Controlliamo che l'input sia un numero valido
      if (isNaN(numero)) {
        console.log("Input non valido. Per favore, inserisci un valore numerico.");
        chiediNumero(); // Chiediamo di nuovo lo stesso numero
      } else {
        arrayDiNumeri.push(numero); // Aggiungiamo il numero all'array
        chiediNumero(); // Richiamiamo la funzione per chiedere il numero successivo
      }
    });
  } else {
    // Se abbiamo raccolto tutti i numeri, chiudiamo l'input e procediamo alla stampa
    console.log("\nCaricamento completato.");
    rl.close();
    stampaAlContrario();
  }
}

// Funzione per stampare l'array in ordine inverso
function stampaAlContrario() {
  console.log("Ecco l'array stampato al contrario:");
  // Eseguiamo un ciclo FOR partendo dall'ultimo indice (9) fino al primo (0)
  for (let i = arrayDiNumeri.length - 1; i >= 0; i--) {
    console.log(arrayDiNumeri[i]);
  }
}

// Avviamo il processo chiamando la funzione per la prima volta
chiediNumero();