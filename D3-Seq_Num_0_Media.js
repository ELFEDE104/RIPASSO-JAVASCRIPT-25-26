// Importiamo il modulo 'readline' per gestire l'input da terminale
const readline = require('readline');

// Creiamo un'interfaccia per leggere e scrivere sul terminale
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inizializziamo le variabili come nello pseudocodice
let somma = 0;
let conteggio = 0;

// Stampiamo la richiesta iniziale
console.log("Inserisci una sequenza di numeri che termini con uno 0:");

// Definiamo una funzione per chiedere i numeri all'utente
function chiediNumero() {
  // Poniamo la domanda (usiamo '>' per indicare che attendiamo un input)
  rl.question('> ', (input) => {
    // Convertiamo l'input testuale in un numero (usiamo parseFloat per accettare anche decimali)
    const n = parseFloat(input);

    // Verifichiamo se l'input non è un numero valido
    if (isNaN(n)) {
      console.log("Input non valido. Per favore, inserisci un numero.");
      chiediNumero(); // Richiediamo il numero
      return;
    }

    // Controlliamo se il numero è il valore di terminazione (0)
    if (n === 0) {
      // Se lo è, usciamo dal "ciclo"
      // Controlliamo se sono stati inseriti numeri per evitare la divisione per zero
      if (conteggio > 0) {
        const media = somma / conteggio;
        console.log(`\nLa media è ${media}`);
      } else {
        console.log("\nNessun numero inserito.");
      }
      rl.close(); // Chiudiamo l'interfaccia
    } else {
      // Se non è 0, continuiamo il "ciclo"
      somma = somma + n;
      conteggio = conteggio + 1;
      chiediNumero(); // Chiamiamo di nuovo la funzione per il prossimo numero
    }
  });
}

// Facciamo partire il processo chiamando la funzione per la prima volta
chiediNumero();