function multiplicar(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
console.log(multiplicar(2, 3, 4));

// concatenando string

function concatenarString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
console.log(concatenarString('a', 'b', 'c'));

// usando map com toUpperCase

function toUpperCase(...args: string[]) {
  return args.map((item) => item.toUpperCase());
}
console.log(toUpperCase('xupeta', 'jojo todinho', 'gumercindo'));
