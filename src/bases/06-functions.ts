// el segundo string se refiere al tipo del valor de retorno de la funcion 
// name debe ser de tipo string
//la funcion debe retornar un dato tipo string
function greet(name: string): string {
    return `Hola ${name}`;
}
const message = greet('Pikachu!');
console.log(message);

// funcion de flecha * */
const greet2 = (name2: string): string => {
    return `Hola ${name2}`;
};

const message2 = greet2('Raichu!');
console.log(message2);


// funcion de flecha con return implicito > ({ return implicito})
// funcion con multiples retornos

//definimos una interface para tipar lo que retorna nuestra funcion
interface User {
    uid: string;
    username: string;
}

const getUser = (): User => ({
    uid: 'ABC-123',
    username: 'El_Papi23',
});

console.log(getUser());

// Callback es una funcion que se pasa como argunmento a un metodo /

const myNumbers: number[] = [1, 3, 4, 5];

myNumbers.forEach((value) => {
    console.log({ value });

});
