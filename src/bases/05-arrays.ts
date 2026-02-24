
const myArray: number[] = [1, 2, 3, 4];

// acepta diferente tipos:
// const myArray: (number | string)[] = [1, 2, 3, '4', 5]; 

const myArray2 = [...myArray];
// para arreglos anidador se recomienda structuredClone() para crear un duplicado

myArray2.push(5);

console.log({ myArray, myArray2 });
