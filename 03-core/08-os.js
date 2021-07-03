const os = require('os')

console.log(os.arch()) //muestra la arquitectura del sistema
console.log(os.platform())// muestra el sistema operativo en el que estas trabajando
console.log(os.cpus())//muestra la informacion de las cpus del sistema
console.log(os.cpus().length)//muestra la informacion de las cpus del sistema
console.log(os.constants)//trae todos los errores y todas las señales del sistema
console.log(os.freemem())//trae la cantidad de memoria ram libre en el sistema en bytes
console.log(os.totalmem())//trae el total de memoria disponible en el sistema
console.log(os.homedir())//te trae el directorio raiz del usuario
console.log(os.tmpdir())//Trae el directorio de archivos temporarios
console.log(os.hostname())//Trae el nombre del equipo
console.log(os.networkInterfaces())//trae todas las interfaces de red a las que esta conectado 
