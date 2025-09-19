const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Funzione che trova il valore massimo in un array di numeri.
 * @param {number[]} A L'array di numeri.
 * @returns {number | null} Il numero più grande o null se l'array è vuoto.
 */
function trovaMassimo(A) {
  if (A.length === 0) {
    return null; // Nessun massimo in un array vuoto
  }

  // MAX = A[0]
  let max = A[0];

  // FOR I da 1 a lenght(A)-1
  for (let i = 1; i < A.length; i++) {
    // IF A[I] > MAX then
    if (A[i] > max) {
      // MAX = A[I]
      max = A[i];
    }
  }

  // RETURN MAX
  return max;
}

// Parte principale per testare la funzione
const arrayDiNumeri = [];
const NUMERI_DA_INSERIRE = 5;

console.log(`Inserisci ${NUMERI_DA_INSERIRE} numeri, uno alla volta.`);

function chiediNumero() {
  if (arrayDiNumeri.length < NUMERI_DA_INSERIRE) {
    rl.question(`Inserisci il numero ${arrayDiNumeri.length + 1}: `, (input) => {
      const numero = parseFloat(input);
      if (isNaN(numero)) {
        console.log('Input non valido, riprova.');
      } else {
        arrayDiNumeri.push(numero);
      }
      chiediNumero();
    });
  } else {
    // Una volta riempito l'array, chiama la funzione e stampa il risultato
    const massimo = trovaMassimo(arrayDiNumeri);
    console.log(`\nL'array inserito è: [${arrayDiNumeri.join(', ')}]`);
    console.log(`L'elemento più grande è ${massimo}`);
    rl.close();
  }
}

chiediNumero(); // Avvia il processo