
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ , , trunks ] = characterNames;

console.log({trunks});

const returnsArraysFn = () => {
    return ['Abc', 123] as const;
}

const [ letras, numeros ] = returnsArraysFn();

console.log(numeros + 100);

// TAREA

// const useState = () => {
//     return ('ABC', () => {
//         console.log('Vegeta');
//     }) as const;
// }




