// crear estructura de nuestras clases/perfiles de personajes
interface gameClass {
    name: string;
    skills: Skill;
    armor: string;
    weapon: string;
    damage: number;
    HP: number;
}

interface Skill {
    skillOne: string;
    skillsTwo: string;
}

// creando nuestras clases/perfiles de personajes
const Rogue: gameClass = {
    name: 'Rogue',
    skills: {
        skillOne: 'Agility',
        skillsTwo: 'Strength',
    },
    armor: 'Leather',
    weapon: 'Sword',
    damage: 60,
    HP: 100,
};

const Warlock: gameClass = {
    name: 'Warlock',
    skills: {
        skillOne: 'Intelect',
        skillsTwo: 'Dark Art',
    },
    armor: "Cloth",
    weapon: "Wand",
    damage: 30,
    HP: 100,
};

console.log(`Game classes:
    `, 'Rogue: ', Rogue, 'Warlock: ', Warlock);

// Crear funcion de Ataque 

const attack = (pj: gameClass) => {
    console.log(`Te ha atacado un ${pj.name}
    Has sido herido con: ${pj.weapon}
    Te causo ${pj.damage} -HP de dano.
    HP is now at ${pj.HP - pj.damage} `);
};

// Crear funcion para atacar con cualquier personaje

// console.log(attack(Roge.name, Roge.weapon, Roge.dmg));

console.log(attack(Rogue));
console.log(attack(Warlock));
