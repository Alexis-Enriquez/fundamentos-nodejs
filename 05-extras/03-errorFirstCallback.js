//patron que define que el primer parametro de una funcion asincrona debe ser el error 
function asincrona(callback){
    setTimeout(function(){
        try{
            let a = 3 + z
            callback(null, a)
        }catch(err){
            callback(e,null)
        }
    },1000)
}


asincrona(function(err,dato){
    if(err){
        console.error('tenemos un error')
        console.error(err)
        return false 
        //throw err //funciona solo en funciones sincronas 
    }
})