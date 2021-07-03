const http = require('http')

http.createServer(router).listen(3000)


function router(req,res){
    console.log('nueva peticion')
    console.log(req.url)

    switch(req.url){
        case '/hola':
            res.write('hola, que tal?')
            res.end()
            break

        default:
        res.write('Error 404:')
        res.end()
    }

    res.writeHead(201,{'Content-Type':'text/plain'}) //escribo la cabecera

    res.write('hola estoy usando HTTP desde NodeJS')

    res.end()
}

console.log('escuchando http en el puerto 3000')