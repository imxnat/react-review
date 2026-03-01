/**
 * crear una funcion que sea getHeroesByOwner => Hero[]
 * Filtra heroes por su propietario
 * 
 */
import { heroes, type Hero } from "../data/heroes.data";

export const getHeroesByOwner = (owners: string): Hero[] => {
    const heroOwner = heroes.filter((value) => {
        return value.owner === owners;
    });
    return heroOwner;
};


// console.log(getHeroesByOwner('Marvel'));