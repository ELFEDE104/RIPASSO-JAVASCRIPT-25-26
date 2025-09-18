// Per usare il modulo 'readline' per l'input da terminale
const readline = require('readline');

// Creiamo un'interfaccia per leggere l'input e scrivere l'output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Poniamo la domanda all'utente
rl.question('Inserire un numero da cui ricavare il fattoriale: ', (answer) => {
  // Convertiamo la risposta (che è una stringa) in un numero intero
  const n = parseInt(answer);

  // Verifichiamo se l'input è un numero valido e non negativo
  if (isNaN(n) || n < 0) {
    console.log('Per favore, inserisci un numero intero non negativo.');
  } else {
    // Inizializziamo la variabile per il fattoriale (nf)
    // Usiamo BigInt per calcolare fattoriali di numeri grandi senza perdere precisione
    let nf = 1n; 

    // Eseguiamo il ciclo FOR da 1 fino al numero n
    for (let i = 1; i <= n; i++) {
      // Moltiplichiamo nf per il valore corrente di i
      // È necessario convertire i in BigInt per la moltiplicazione
      nf = nf * BigInt(i);
    }

    // Stampiamo il risultato finale
    console.log(`Il fattoriale di ${n} è ${nf}`);
  }

  // Chiudiamo l'interfaccia di lettura
  rl.close();
});