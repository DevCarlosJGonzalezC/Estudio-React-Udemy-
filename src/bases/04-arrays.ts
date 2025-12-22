
// const myArrays:(number| string)[] = [1, 2, 3, 4, 5 ];
const myArrays: number[] = [1, 2, 3, 4, 5 ];

const myArrays2 = [...myArrays]

myArrays2.push(6);
myArrays2.push(7);

console.log({myArrays, myArrays2})
