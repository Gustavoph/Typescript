// Union types -> quando falamos que um campo pode ter um ou mais valores; 

function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return `${a}${b}`;
    return `${a}${b}`;
}

console.log(add('10', 20));