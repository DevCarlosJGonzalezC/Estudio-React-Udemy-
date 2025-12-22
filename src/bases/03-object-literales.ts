//transpilacion de objetos literales.
interface Person{
    nombre: string;
    apellido: string;
    edad: number;
    
    direccion: Address
}

interface Address {
        ciudad: string;
        pais: string;
        postalCode: string
}


const people: Person = {
    nombre: "Carlos Jose",
    apellido: "Gonzalez Castellanos",
    edad: 35,
    direccion: {
        ciudad: "Caracas",
        pais: "Venezuela",
        postalCode: "123-abc"
    }
}

console.log(people)

// const hulk: Person = {
//     nombre: "bruce",
//     apellido: "verde",
//     edad: 40,
//     ciudad: "miami"
// }

// console.log(hulk)

// const spiderMan = structuredClone(people)

// spiderMan.nombre = "Jose Jhoel"
// spiderMan.apellido = "Gonzo"
// spiderMan.edad = 9
// spiderMan.ciudad = "New York"

// console.log(people)