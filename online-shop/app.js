const express = require('express')
const app = express()
const home_router = require("./routes/home.route")
const path = require('path')
app.use(express.static(path.join(__dirname, "images")))
app.use(express.static(path.join(__dirname, "assets")))
app.set("view engine", "ejs")
app.set("views")

app.use("/", home_router)
app.listen(3000, () => {
    console.log("app is listening")
})