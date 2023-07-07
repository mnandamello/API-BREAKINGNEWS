const User = require("../models/User"); //aqui é a referencia do banco, onde ele vai cadastrar

const createService = (body) => User.create(body); //aqui ele esta pegando as infos do body ficticio e ta falando q são as mesmas infos que vai ir pro banco de dados, o create é um metodo do mongoose que cria um novo item dentro do Schema naquele padrão.

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, name, username, email, avatar, background) =>
  User.findOneAndUpdate(
    { _id: id },//ache um
    { name, username, email, avatar, background }//e atualize algum desses
  );


module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
