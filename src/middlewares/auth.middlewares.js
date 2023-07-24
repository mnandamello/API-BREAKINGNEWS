import dotenv from "dotenv";
import userService from "../services/user.service.js";
import Jwt from "jsonwebtoken";


dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: err.message });
    }

    const parts = authorization.split(" "); //cria um array e separa as strings.

    if (parts.length !== 2) {
      return res.status(401).send({ message: err.message });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.status(401).send({ message: err.message  });
    }

    Jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "invalid Token1" });
      }

      const user = await userService.findByIdService(decoded.id);
  
      if(!user || !user.id){
        return res.status(401).send({ message: "invalid Token2" });
      }

      req.userId = user.id;

      next();
    });

  
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
