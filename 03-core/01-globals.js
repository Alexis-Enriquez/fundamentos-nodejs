console.log(global)

let i = 1

let intervalo = setInterval(() => {
    if(i===3){
        clearInterval(intervalo)
    }
    console.log('hola')
    i++
}, 1000);


//otros ejemplos de globales
//require()
//setImmediate(()=>{
//    console.log('hola inmediato')
//})
//process
//__dirname
//__filename

console.log(this === global)