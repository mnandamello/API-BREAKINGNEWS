const mongoose = require('mongoose');

//criamos nossa estrutura que vai ser enviada para o banco.
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  background: {
    type: String,
    require: true,
  },
});//aqui estamos fazendo aquele if pra verificar se está tudo preenchido, mas agr dentro do BANCO DE DADOS

const User = mongoose.model("User", UserSchema);
module.exports = User;