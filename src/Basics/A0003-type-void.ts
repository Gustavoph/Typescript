/* Usa quando uma função e metodos não possui retorno */

function notReturn(...args: string[]): void {
    console.log(args.join(' '));
}

const people = {
    name: 'Gustavo',
    lastName: 'Oliveira',

    print(): void{ 
        console.log(this.name + ' ' + this.lastName);
    }
}

notReturn('Gustavo', 'Oliveira');
people.print();
