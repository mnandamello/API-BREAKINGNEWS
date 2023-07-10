import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
    select: false,
  },
  avatar: {
    type: String,
    require: true,
  },
  background: {
    type: String,
    require: true,
  },
}); //aqui estamos fazendo aquele if pra verificar se está tudo preenchido, mas agr dentro do BANCO DE DADOS

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10); //o hash embaralha a senha pra ficar irreconhecivel
  next();
}); //antes de salvar o schema execue isso.

const User = mongoose.model("User", UserSchema);
export default User;
