// Importiamo il modulo 'readline' per gestire l'input da terminale
const readline = require('readline');

// Creiamo l'interfaccia per la lettura e scrittura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const NUMERI_TOTALI = 10;
const arrayDiNumeri = [];

console.log(`Inserisci ${NUMERI_TOTALI} numeri, uno per volta.`);

// Funzione per chiedere un numero all'utente
function chiediNumero() {
  // Controlliamo se abbiamo già raccolto tutti i numeri
  if (arrayDiNumeri.length < NUMERI_TOTALI) {
    rl.question(`Inserisci il numero ${arrayDiNumeri.length + 1}/${NUMERI_TOTALI}: `, (input) => {
      const numero = parseFloat(input);

      // Controlliamo che l'input sia un numero valido
      if (isNaN(numero)) {
        console.log("Input non valido. Per favore, inserisci un valore numerico.");
        chiediNumero(); // Chiediamo di nuovo lo stesso numero
      } else {
        arrayDiNumeri.push(numero); // Aggiungiamo il numero all'array
        chiediNumero(); // Chiamiamo la funzione per il numero successivo
      }
    });
  } else {
    // Se abbiamo raccolto tutti i numeri, chiudiamo l'input e procediamo
    console.log("\nCaricamento completato.");
    rl.close();
    trovaMinMax();
  }
}

// Funzione per trovare il minimo e il massimo
function trovaMinMax() {
  // Inizializziamo MIN e MAX con il primo elemento dell'array
  let min = arrayDiNumeri[0];
  let max = arrayDiNumeri[0];

  // Eseguiamo un ciclo FOR per scorrere l'array
  // Partiamo dal secondo elemento (indice 1) perché il primo è già stato usato
  for (let i = 1; i < arrayDiNumeri.length; i++) {
    // Controlliamo se l'elemento corrente è minore di MIN
    if (arrayDiNumeri[i] < min) {
      min = arrayDiNumeri[i]; // Se sì, aggiorniamo MIN
    }
    // Controlliamo se l'elemento corrente è maggiore di MAX
    if (arrayDiNumeri[i] > max) {
      max = arrayDiNumeri[i]; // Se sì, aggiorniamo MAX
    }
  }

  // Stampiamo i risultati finali
  console.log(`\nIl valore minimo è ${min}`);
  console.log(`Il valore max è ${max}`);
}

// Avviamo il processo chiamando la funzione per la prima volta
chiediNumero();