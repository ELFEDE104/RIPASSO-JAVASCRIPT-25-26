const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Dimmi la base: ", (base) => {
  rl.question("Dimmi l'altezza: ", (altezza) => {
    base = parseFloat(base);
    altezza = parseFloat(altezza);

    if (!isNaN(base) && !isNaN(altezza)) {
      let area = base * altezza;
      console.log("L'area del rettangolo è: " + area);
    } else {
      console.log("Per favore, inserisci dei numeri validi.");
    }

    rl.close();
  });
});
