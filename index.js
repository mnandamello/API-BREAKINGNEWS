import express from "express";//aqui ele esta chamando todos os pacotes do node_modules
import connectDatabase from "./src/database/db.js";
import userRouter from "./src/routes/user.route.js";//aqui é o modulo de rotas

const app = express(); //essa é a nossa variavel principal
const port = 3000;

connectDatabase()
app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
