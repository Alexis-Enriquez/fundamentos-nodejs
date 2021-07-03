const {exec,spawn} = require('child_process')


//exec ejecuta un comando que le asignemos
exec('dir', (err, stdout, sterr)=>{
    if(err){
        console.error(err.message)
        return false
    }
    console.log(stdout)
})

//Spawn invoca un proceso nuevo de nodejs

let proceso = spawn('dir')
console.log(proceso)

proceso.stdout.on('data',(dato)=>{
    console.log(dato.toString())
})
