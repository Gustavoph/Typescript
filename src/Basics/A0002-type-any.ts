/* Any: Pode receber qualquer coisa | Usar apenas em ultimo caso */
function showMessageAny(msg: any) {
    return msg;
}

function showMessageString(msg: string) {
    return msg;
}

/* Com any */
console.log(showMessageAny('Hello World'))
console.log(showMessageAny([1, 2, 3]))
console.log(showMessageAny(1))

/* Com type script */
console.log(showMessageString('[1, 2, 3]'))