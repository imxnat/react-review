const animePJ = ['Gon', 'Killua', 'Leorio'];

// const [p1, p2, p3] = animePJ;
// console.log({ p1, p2, p3 });

const [, , p3] = animePJ;
console.log({ p3 });

// how to strict type positions of an array in a function when destructuring
const returnsArrayFn = () => {
    return ['ABC', 123] as const;
};
//destructuring: with as const means 1st positions always gonna be string and 2nd always gonna be number
const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);
