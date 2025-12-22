
function saludar( nombre: string ) : string {
    return `Hola ${ nombre }`
}

const saludar2 = ( nombre: string  ) => `Hola ${nombre}`


const message = saludar('Carlos')
const message2 = saludar2('Jose Jhoel')

console.log(message);
console.log(message2);

function getUser( ) {
    return {
        uid: 'ABC123',
        userName: "elche2812"
    }
}

const user = getUser();
console.log(user);

// TAREA

interface User {
    uid: string;
    userName: string;
    edad: number
}

const getUser2 = (): User => ({    
        uid: "Respuesta de la tarea de fernando herrara",
        userName: "Maquina de Guerra",    
        edad: 35
})

const user2 = getUser2();

console.log(getUser2())

const misNumeros = [1,2,3,4,5];

// misNumeros.forEach(function (value){
//     console.log({value})
// })

misNumeros.forEach((value)=> {
     console.log(value)
})