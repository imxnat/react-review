import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'UoFGy6stbXFD023gYYdZIrVTcnngV9gr';


//crear una funcion que se encargue de obtener la imagen solamente
const createImageDOM = (url: string) => {
    const imageURL = url;

    const imgElement = document.createElement('img');
    imgElement.src = imageURL;

    document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
};

getRandomGifUrl()
    .then(url => createImageDOM(url));