
const http = require('http')

const server = http.createServer((req, res)=>{

    res.end('I listening broo')

})

server.listen(3000, ()=>{

    console.log("server is running on http://localhost:3000")
})
