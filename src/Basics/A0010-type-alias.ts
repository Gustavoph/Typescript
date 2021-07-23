// Type Alias -> é a junção de types

type Idade = number;

type CorRGB = 'RED' | 'GREEN' | 'BLUE';
type CorCMYK = 'CIANO' | 'MAGENTA' | 'YELLOW' | 'BLACK';
type CorPreferida = CorCMYK | CorRGB; // Or

type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida: CorPreferida
};

const person:Pessoa = {
    nome: 'Gustavo',
    idade: 19,
    salario: 1000,
    corPreferida: "BLACK"
}