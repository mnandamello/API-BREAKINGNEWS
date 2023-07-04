const route = require('express').Router();
const userController = require('../controllers/user.controller')

route.post("/", userController.create) //criando um usuario

module.exports = route;