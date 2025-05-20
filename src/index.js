const readline = require('readline');
const math = require('/.math');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Scegli un\'operazione:');
console.log('1. Somma');
console.log('2. Sottrazione');
console.log('3. Moltiplicazione');
console.log('4. Divisione');

rl.question('Inserisci il numero dell\'operazione: ', (opzione) => {
  rl.question('Inserisci il primo numero: ', (primo) => {
    rl.question('Inserisci il secondo numero: ', (secondo) => {
      const a = parseFloat(primo);
      const b = parseFloat(secondo);
      let risultato;

      switch (opzione) {
        case '1':
          risultato = math.add(a, b);
          console.log(`Risultato: ${risultato}`);
          break;
        case '2':
          risultato = math.subtract(a, b);
          console.log(`Risultato: ${risultato}`);
          break;
        case '3':
          risultato = math.multiply(a, b);
          console.log(`Risultato: ${risultato}`);
          break;
        case '4':
          try {
            risultato = math.divide(a, b);
            console.log(`Risultato: ${risultato}`);
          } catch (err) {
            console.error(err.message);
          }
          break;
        default:
          console.log('Opzione non valida.');
      }

      rl.close();
    });
  });
});