function noAnda(){
    return 3+z
}

function elevoElError(){
    noAnda()
}

//la estructura try catch nos sirve para poder tener un mayor control de los errores y asi poder evitar que se detenga la ejecucion 
try{
    noAnda()
}catch(err){
    console.error('algo anda mal')
}


//los errores en node se van enlazando por lo que un error de una funcion que esta dentro de otra igualmente termina siendo capturado por el try catch
try{
    elevoElError()
}catch(err){
    console.error('algo anda mal')
}


//asincronismo
//lo que ocurre en el ejemplo es que se introduce un trycatch dentro de la funcion asincrona porque esta se va a ejecutar en otro hilo 

function noAndaAsync(cb){
    setTimeout(()=>{
        try{
            return 3 + z
        }catch(err){
            console.error('algo anduvo mal')
            cb(err)
        }
    })
}


try{
    noAndaAsync(function(err){
        console.log(err.message)
    })
}catch(err){
    console.error('algo anda mal')
}
