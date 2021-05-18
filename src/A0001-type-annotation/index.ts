/* Tipos básicos */

let nome: string = 'Gustavo';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer-symbol');

/* Arrays */

let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers_: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];
let arrayStrings_: string[] = ['a', 'b', 'c'];

/* Object */

let pessoa: {  nome: string, idade: number, adulto?: boolean } = {
    nome: 'Gustavo',
    idade: 19
};

/*  Function */
function soma(x: number, y: number): number {
    return x + y;
}

const result = soma(2, 2);