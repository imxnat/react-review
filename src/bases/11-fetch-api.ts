import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'UoFGy6stbXFD023gYYdZIrVTcnngV9gr';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


//crear una funcion que se encargue de obtener la imagen solamente
const createImageDOM = (url: string) => {
    const imageURL = url;
    console.log(imageURL);

    const imgElement = document.createElement('img');
    imgElement.src = imageURL;

    document.body.append(imgElement);
};

myRequest
    .then((response) => response.json()) //parse a json format
    .then(({ data }: GiphyRandomResponse) => {
        console.log(data); // almacenar en variable e imprimir 

        const imageURL = data.images.original.url;
        createImageDOM(imageURL);

    })
    .catch((err) => {
        console.error(err);
    });