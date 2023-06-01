const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//middleware
const breadsController = require("./controllers/breads_controller.js")
app.use('/breads',breadsController)

//Routes
app.get('/',(req,res)=>{
res.send("Welcome  to an Awesome App about Bread!")
})


//Listen
app.listen(PORT,() => {
    console.log('listening on port', PORT);
})