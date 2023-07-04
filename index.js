const express = require('express') //aqui ele esta chamando todos os pacotes do node_modules
const userRouter = require("./src/routes/user.route")
const app = express() //essa é a nossa variavel principal

app.use("/", userRouter)

app.listen(3000)