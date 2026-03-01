import { heroes, type Hero } from "../data/heroes.data";
// import { heroes as favHeroes } from "../data/heroes.data";


const getHeroesById = (id: number): Hero | undefined => {

    const hero = heroes.find((value) => {
        return value.id === id;
    });

    return hero;
};
console.log(getHeroesById(1));