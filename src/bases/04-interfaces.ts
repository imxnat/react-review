// interface Marvel {
//     firstName: string;
//     lastName: string;
//     age: number;
//     address?: {
//         zipcode?: number;
//         city: string;
//     };
// }

// el simbolo ? hace opcional la propiedad 


// manera correcta de declarar interfaces con anidaciones
interface Marvel {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    zipcode?: number;
    city: string;
};

const ironman: Marvel = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipcode: 34565,
        city: 'New York',
    }
};

// crear un nuevo objeto de tipo interface Person con las misma props
const spiderman: Marvel = {
    firstName: "Peter",
    lastName: "Parker",
    age: 0,
    address: {
        city: "San Francisco",
    }
};

console.log(ironman, spiderman);
