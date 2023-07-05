const User = require('../models/User'); //aqui é a referencia do banco, onde ele vai cadastrar

const create = (body) => User.create(body)//aqui ele esta pegando as infos do body ficticio e ta falando q são as mesmas infos
//que vai ir pro banco de dados, o create é um metodo do mongoose que cria um novo item dentro do Schema naquele padrão.

module.exports = { create };