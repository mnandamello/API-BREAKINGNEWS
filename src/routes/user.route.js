import express from 'express';
import userController from "../controllers/user.controller.js"
import { validId, validUser } from "../middlewares/global.middlewares.js";

const route = express.Router();

route.post("/", userController.create); //criando um usuario
route.get("/", userController.findAll);//aqui estamos pegando todos os usuarios
route.get("/:id", validId, validUser, userController.findById);//aqui conseguimos achar um usuario pelo id, pois passamos como parametro.
route.patch("/:id", validId, validUser, userController.update);


export default route;