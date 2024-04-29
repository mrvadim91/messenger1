const express = require("express");
const PORT = 3000;
const path = require("path")
let app = express()

const publicPath = path.join(__dirname, '/../public')

app.use(express.static(publicPath))

app.listen(PORT, ()=> {
    console.log("Api is listening on this url: http://localhost:3000/")
})