// Importiamo il modulo 'readline' per gestire l'input da terminale
const readline = require('readline');

// Creiamo un'interfaccia per leggere e scrivere sul terminale
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Chiediamo all'utente quanti numeri pari desidera sommare
rl.question('Inserisci quanti numeri pari vuoi sommare: ', (answer: string) => {
  // Convertiamo la risposta testuale in un numero intero
  const n = parseInt(answer);

  // Controlliamo che l'input sia un numero valido e positivo
  if (isNaN(n) || n <= 0) {
    console.log('Per favore, inserisci un numero intero positivo.');
  } else {
    // Inizializziamo la variabile per la somma
    // Usiamo BigInt (0n) per gestire somme potenzialmente molto grandi
    let somma = 0n;

    // Eseguiamo un ciclo FOR che si ripete 'n' volte
    for (let i = 1; i <= n; i++) {
      // Calcoliamo l'i-esimo numero pari (se i=1 -> 2, se i=2 -> 4, etc.)
      const n_pari = BigInt(i * 2);
      
      // Aggiungiamo il numero pari trovato alla somma totale
      somma = somma + n_pari;
    }

    // Stampiamo il risultato finale
    console.log(`La somma dei primi ${n} numeri pari è ${somma}.`);
  }

  // Chiudiamo l'interfaccia di lettura
  rl.close();
});