const express = require('express')
const app = express()

const VERSION = process.env.VERSION || "BLUE"

app.get('/', (req,res)=>{
    res.send(`Running Version: ${VERSION}`)
})

app.listen(3000, ()=> console.log("Server running"))
