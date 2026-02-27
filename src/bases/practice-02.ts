const useState = (value: string) => {
    return [value, (message: string) => { console.log(message); }] as const;
};

const [name, setName] = useState('Kilua');
console.log({ name });
setName('Gon set name')



