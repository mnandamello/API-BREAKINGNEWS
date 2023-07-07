const userService = require("../services/user.service"); //import para usar a função create.

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body; //pedindo as informações do forms (requisição).

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for regsitration" });
  } //teste para ver se tudo está preenchido.

  const user = await userService.createService(req.body); //aqui estamos cadastrando no banco de dados

  if (!user) {
    return res.status(400).send({ message: "Error creating user" });
  }

  //aqui estamos mandando uma resposta pro usuario, falando que foi criado com sucesso e mostrando apenas o que queremos.
  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService(); //aqui ele manda o service buscar os users.

  if (users.lenght === 0) {
    return res.status(400).send({ message: "There are not registered users" });
  }

  res.send(users);
};


const findById = async (req, res) => {

  const user = req.user;

  res.send(user);
};


const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;//pra fazer update precisa de todas as infos

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at list one field for update" });
  }

  const {id, user} = req;


  await userService.updateService(//ligação direta com o service
    id,
    name,
    username,
    email,
    avatar,
    background
  );

  res.send({message: "Sucessfully updated!"})
};




const deleteById = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }

  const user = await userService.findByIdService(id);

  await userService.deleteService(
    id,
    name,
    username,
    email,
    avatar,
    background
  );

  res.send({ message: "Usuario deletado" });
};

module.exports = { create, findAll, findById, update };
