console.log('texto')
console.info('Dato')//Equivalente a console.log con la finalidad de informar 
console.error('comunicar un error')
console.warn('una advertencia')
var tabla = [
    {a:1,b:'z'},
    {a:2,b:'y'}
]
console.table(tabla)//una manera de visualizar en forma de tablas 


//console.group nos sirve para agrupar mensajes en consola y asi mejorar su visualizacion, puede tener sub grupos
console.group('inicio conversacion')
console.log('Hola')
console.log('Blablabla')
console.log('Adios')
console.groupEnd('fin conversacion')

//Ejemplo
function funcion1 ( ){
    console.group('mensajes partientes de la funcion1')
    console.log('soy un textoooo')
    console.log('soy un textoooo')
    console.log('soy un textoooo')
    console.log('soy un textoooo')
    console.groupEnd('fin conversacion')
}
function funcion2 ( ){
    console.group('mensajes partientes de la funcion2')
    console.log('soy un textoooo')
    console.log('soy un textoooo')
    console.log('soy un textoooo')
    console.log('soy un textoooo')
    console.groupEnd('fin conversacion')
    
}
funcion1()
funcion2()

//contadores
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')



