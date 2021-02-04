// const dotenv = require("dotenv")
// dotenv.config({})

const express = require("express")
const cors = require("cors")
const routes = require("./routes")

const app = express()

require("./db")

app.use(cors())
app.use(express.json())

app.use(routes)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})