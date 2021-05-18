/* Array<T>(Generics) - T[] */
function multipliArgs(...args: number[]): number{
    return args.reduce((ac, value) => ac * value, 1)
}

function concatString(...args: Array<string>): string{
    return args.reduce((ac, value) => ac + value)
}

const result = multipliArgs(1, 2, 3);
const result_ = concatString('a', 'b', 'c');
console.log(result);
console.log(result_);

export default result