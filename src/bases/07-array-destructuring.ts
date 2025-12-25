
const characterNames1 = ["Goku", "vegeta", "Trunks"];

const [ , ,trunks1 ] = characterNames1;

console.log({trunks1});

const returnArrayFn1 = () => {
    return ['ABC', 123] as const 
}


const [letras1, numeros2] = returnArrayFn1();

console.log("Resultado es sumar los numeros de la funcion: ", numeros2 + 100 )
console.log("Resultado de el string es concatenar las letras: ",letras1 + 100 )


console.warn("*************Ejercicio Practico First***************")

const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ , , trunks ] = characterNames;

console.log({trunks});

const returnsArraysFn = () => {
    return ['Abc', 123] as const;
}

const [ letras, numeros ] = returnsArraysFn();

console.log(numeros + 100);

// TAREA

const useState = (value: string) => {
    return [
        value, 
        (newName:string) => {
        console.log(newName)
    },
]as const;
}
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"



