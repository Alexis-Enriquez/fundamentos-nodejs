var sr = 'Exi'

function hola(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('hola '+nombre)
            resolve(nombre)
        },1000)
        })
    
}

function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('me fui '+nombre)
            resolve(nombre)
        },1000)

    })
}

function hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('bla bla bla')
        },1000)
        resolve(nombre)
    })
}

//--
hola(sr)
.then(hablar)
.then(hablar)
.then(hablar)
.then((nombre)=>{
    adios(nombre)
})