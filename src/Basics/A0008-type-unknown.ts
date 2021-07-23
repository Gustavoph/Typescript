// Uknown é um type enum mais seguro pois te força a fazer a verificação

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;

const y = 800;

if (typeof x === 'number') console.log(x + y);