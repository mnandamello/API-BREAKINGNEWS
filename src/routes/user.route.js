const route = require('express').Router();
const userController = require('../controllers/user.controller');
const { validId, validUser } = require('../middlewares/global.middlewares');

route.post("/", userController.create); //criando um usuario
route.get("/", userController.findAll);//aqui estamos pegando todos os usuarios
route.get("/:id", validId, validUser, userController.findById);//aqui conseguimos achar um usuario pelo id, pois passamos como parametro.
route.patch("/:id", validId, validUser, userController.update);


module.exports = route;