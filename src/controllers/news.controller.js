import newsService from "../services/news.service.js";

const create = async (req, res) => {
  try{
    const { title, text, banner } = req.body;

    if (!title || text || banner) {
      res.status(400).send({ message: "Submit all fields for regsitration" });
    }

    await createService({
      title,
      text,
      banner, 
      id: "objectidfake"
    })



    res.send(201)

    
  }catch (err) {
    res.status(500).send(err.message);
  }
};

const findAll = async (req,res) => {
  try{
    const news = []
    res.send(news)
  }catch (err) {
    res.status(500).send(err.message);
  }
};

export default { create, findAll };