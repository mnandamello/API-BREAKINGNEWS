const express = require("express"); //aqui ele esta chamando todos os pacotes do node_modules
const app = express(); //essa é a nossa variavel principal
const connectDatabase = require("./src/database/db");

const userRouter = require("./src/routes/user.route");

const port = 3000;

connectDatabase()
app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
