function soyAsincrona(){
    setTimeout(function(callback){
        console.log('soy asincrona')
        callback()
    },1000)
}
console.log('iniciando proceso')
soyAsincrona(function(){
    console.log('terminando proceso')

})

//complicando un poco mas la funcion

function hola(nombre, callback){
    setTimeout(function(callback){
        console.log('hola '+nombre)
        callback(nombre)
        
    },1000)
}

var sr = 'alexis'
function adios(nombre,callback){
    setTimeout(function(){
        console.log('me fui '+nombre)
        callback()
    },1000)
}

console.log('iniciando proceso')
hola(sr,function(nombre){
    adios(nombre,function(){
        console.log('terminando proceso')
    })

})