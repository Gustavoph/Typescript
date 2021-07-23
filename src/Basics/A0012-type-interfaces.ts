// Interface é semelhante ao type (interface = modelagem do objeto)
interface Impostos {
  IPVA: number,
}

interface Car extends Impostos{
  name: string,
  year: Date,
}

const newCar: Car = {
  name: 'Gol',
  year: new Date(),
  IPVA: 15000,
};

console.log(newCar);