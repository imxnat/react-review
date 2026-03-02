/** <type> es un generico para decir que tipo va resolver nuestra promesa */

const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //! Yo quiero mi dinero//
        // resolve(100); // se cumple la promesa

        reject('Mi amigo se fugo con mi plata'); // fallo de la promesa
    }, 2000); // 2 segundos
});


/* Manejo de una promessa para los diferentes escenarios */
myPromise
    .then((myMoney) => {
        console.log(`tengo mi dinero ${myMoney}`);
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(() => { // siempre se ejecuta sin importar si se resuelve o no la promesa
        console.log('sigo con mi vida');
    });
