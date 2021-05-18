/* Object */
const objectA: {
    readonly keyA: string,
    keyB: string,
    keyC?: string,
    [key: string]: unknown
} = {
    keyA: 'Value A',
    keyB: 'Value B'
}

/* objectA.keyA = 'This value A' */
objectA.keyD = 'This value D'
console.log(objectA);