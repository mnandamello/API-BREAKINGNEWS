const userService = require('../services/user.service');//import para usar a função create.

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;//pedindo as informações do forms (requisição).

  if (!name || !username || !email || !password || !avatar || !background){
    res.status(400).send({message :"Submit all fields for regsitration"});
  } //teste para ver se tudo está preenchido.

  const user = await userService.create(req.body); //aqui estamos cadastrando no banco de dados

  if (!user){
    return res.status(400).send({message: "Error creating user"});
  }


  //aqui estamos mandando uma resposta pro usuario, falando que foi criado com sucesso e mostrando apenas o que queremos.
  res.status(201).send({
    message:"User created successfully",
    user:{
      id: user._id,
      name,
      username,
      email,
      avatar,
      background
    },
  });
};

module.exports = { create };

