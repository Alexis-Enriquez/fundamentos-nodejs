process.on('beforeExit',()=>{
    console.log('el proceso va a terminar')
})

//la diferencia entre el exit y el before exit es que en el exit ya te has desconectado completamente del eventloop
process.on('exit',()=>{
    console.log('el proceso acabo')
})

process.on('uncaughtException',(err,origen)=>{
    console.error('vaya se nos ah olvidado capturar un error ')
})

funcionQueNoExiste() //el process de arriba va a reaccionar a partir de este error 

