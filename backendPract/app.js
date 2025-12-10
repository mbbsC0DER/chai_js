const http = require("http")

const server = http.createServer( (request , response)=>{
    console.log ( "a new request received ! ")
    const path = request.url
    if (path === "/" || path.toLocaleLowerCase() === "/home"){
        response.end("u r in home ")
    }
    else if (path.toLocaleLowerCase() === "/about"){
        response.end("u r in about")
    }
    else{
        response.end("u r in section ")
    }
})

server.listen( 8000 , "127.0.0.1" , ()=>{
    console.log ("Server ki shuru hua ")
})
