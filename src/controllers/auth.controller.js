import bcrypt from "bcrypt";
import { loginService } from '../services/auth.service.js'

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = loginService (email);

  const passwordIsValid = bcrypt.compare(password, user.password);


  res.send("Login ok")
}

export default {login}