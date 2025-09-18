const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Inserisci il valore per la variabile a: ', (valoreA) => {
  rl.question('Inserisci il valore per la variabile b: ', (valoreB) => {
    
    let a = parseInt(valoreA);
    let b = parseInt(valoreB);
    
    console.log(`\nValori iniziali:`);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    // Inizio dello scambio dei valori (in modo semplificato)
    [a, b] = [b, a];
    // Fine dello scambio
    
    console.log(`\nValori dopo lo scambio:`);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    rl.close();
  });
});