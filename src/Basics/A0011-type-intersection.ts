// Type Intersection -> é a junção de types obrigando eles a serem todos implementados
type Nome = { nome: string };
type Sobrenome = { sobrenome: string };
type Idade = { idade: number };
export type Pessoa = Nome & Sobrenome & Idade; // And

export const people :  Pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Gustavo',
    idade: 19
}