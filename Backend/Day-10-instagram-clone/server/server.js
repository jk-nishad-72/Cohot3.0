
const app = require('./src/app.js')
require('dotenv').config()



let PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} `)
})