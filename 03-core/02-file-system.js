const fs = require('fs')

function leer(ruta,cb){
    fs.readFile(ruta,(err,data)=>{
        cb(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error('hubo un error',err)
        }else{
            console.log('se ha escrito correctamente')
        }

    })
}

function borrar(ruta,cb){
    fs.unlink(ruta,cb)

}


//--
const dirA = __dirname+'/archivo.txt'
leer(dirA,console.log)
escribir(dirA,'esta es una nueva linea que estoy poniendo yo',console.log)
borrar(dirA,console.log)