var sr = 'Exi'

async function hola(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('hola '+nombre)
            resolve(nombre)
        },1000)
        })
    
}

async function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('me fui '+nombre)
            resolve(nombre)
        },1000)

    })
}

async function hablar(){
        setTimeout(function(){
            console.log('bla bla bla')
        },1000)
}

async function main (){
    let nombre = await hola(sr)
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)

}

main()