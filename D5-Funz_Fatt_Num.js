// Importiamo il modulo 'readline' per gestire l'input da terminale
const readline = require('readline');

// Creiamo l'interfaccia per la lettura e scrittura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Calcola il fattoriale di un dato numero.
 * @param {number} n Il numero intero non negativo di cui calcolare il fattoriale.
 * @returns {BigInt} Il fattoriale di n.
 */
function calcolaFattoriale(n) {
  // Inizializziamo il risultato a 1.
  // Usiamo BigInt (1n) per poter gestire numeri molto grandi senza perdere precisione.
  let fatt = 1n;

  // Eseguiamo un ciclo FOR da 1 fino al numero n
  for (let i = 1; i <= n; i++) {
    // Moltiplichiamo il risultato parziale per il valore corrente del ciclo
    // È necessario convertire 'i' in BigInt prima della moltiplicazione
    fatt = fatt * BigInt(i);
  }

  // RITORNiamo il valore finale calcolato
  return fatt;
}

// Chiediamo all'utente di inserire un numero
rl.question('Inserisci un numero per calcolarne il fattoriale: ', (input) => {
  // LEGGI n (convertendo la stringa in un numero intero)
  const n = parseInt(input);

  // Verifichiamo che l'input sia un numero valido e non negativo
  if (isNaN(n) || n < 0) {
    console.log("Input non valido. Per favore, inserisci un numero intero non negativo.");
  } else {
    // Chiamiamo la funzione per ottenere il risultato
    const risultato = calcolaFattoriale(n);
    
    // Stampiamo il risultato finale
    console.log(`Il fattoriale di ${n} è ${risultato}`);
  }

  // Chiudiamo l'interfaccia
  rl.close();
});