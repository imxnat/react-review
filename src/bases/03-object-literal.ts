// nota: objetos literales y arrays se recomiendan crearlos como const

const person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipcode: 'aadsfsfd',
        city: 'New York',
    }
};

// create a new objet with the same property than the first one but diferent values > spread operator

// const spiderman = {...person}

// spread operator solo sirve para objetos simples, para realizar clon de objetos anidados se utiliza la funcion de Javascript --------> structuredClone()

const spiderman = structuredClone(person);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 24;
spiderman.address.city = 'San Francisco';


console.log(person, spiderman);



