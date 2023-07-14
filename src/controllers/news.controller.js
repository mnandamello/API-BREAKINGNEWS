import newsService from "../services/news.service.js";


const create = async (req, res) => {
  try{

    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for regsitration" });
    }

    const news = await newsService.createService({
      title,
      text,
      banner, 
      user: req.userId
    })

    res.send({message: "News created"})


  }catch (err) {
    res.status(500).send({message: err.message});
  }
};

const findAll = async (req,res) => {
  try{
    const news = await newsService.findAllService();

    if (news.lenght === 0) {
      return res.status(400).send({ message: "There are not registered news" });
    } 


    res.send(news)
  }catch (err) {
    res.status(500).send(err.message);
  }
};

export default{ create, findAll };