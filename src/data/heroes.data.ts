// crear interface para definir tipo de nuestros objetos
interface Hero {
    id: number;
    name: string;
    owner: Owner;
}
//------- type no tiene contraparte en JS y es neto de typescript 
// se usa cuando tienes opciones especificas 
type Owner = 'DC' | 'Marvel';

//------- enum
// enum Owner {
//     DC = 'DC',
//     Marvel = 'Marvel',
// }

const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC',
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC',
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
    },
];