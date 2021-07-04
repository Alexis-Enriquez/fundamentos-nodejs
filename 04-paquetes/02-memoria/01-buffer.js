//let buffer = Buffer.alloc(4) //guarda 4 bytes
let buffer = Buffer.from([1,2,3,4]) //guarda 4 bytes
let buffer2 = Buffer.from('hola exi') //guarda 4 bytes


console.log(buffer)
console.log(buffer2)
console.log(buffer2.toString())


let abc = Buffer.alloc(26)

for(let i=0; i<26;i++){
    abc[i]=i+97
}

console.log(abc)
console.log(abc.toString())