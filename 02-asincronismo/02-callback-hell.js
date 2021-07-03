var sr = 'Exi'

function hola(nombre, callback){
    setTimeout(function(){
        console.log('hola '+nombre)
        callback(nombre)
        
    },1000)
}

function adios(nombre,callback){
    setTimeout(function(){
        console.log('me fui '+nombre)
        callback()
    },1000)
}

function hablar(callback){
    setTimeout(function(){
        console.log('bla bla bla')
        callback()
    },1000)
}

//utilizando recursividad re factorizar el codigo
function conversacion(nombre, veces, callback){
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    }else{
        callback(nombre)
    }
}
//-- 

//callbackhell
/* console.log('iniciando proceso')
hola(sr,function(nombre){
    hablar(function(){
        hablar(function(){
            adios(nombre,function(){
                console.log('terminando proceso')
            })
        })
    })

}) */

console.log('iniciando proceso')
hola(sr,function(nombre){
    conversacion(nombre,4, function(nombre){
        adios(nombre, function(){
            console.log('terminando Proceso')
        })
    })
})
