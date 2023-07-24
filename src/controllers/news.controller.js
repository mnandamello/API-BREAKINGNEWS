import newsService from '../services/news.service.js'


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

const findAll = async (req, res) => {

    let {limit, offset} = req.query;

    limit = Number(limit);
    offset = Number(offset);
    
    if(!limit){
      limit = 5;
    }

    if(!offset){
      offset = 0;
    }

    const news = await newsService.findAllService(offset, limit);
    const total = await newsService.countNews();
    const currentUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    if (news.lenght === 0) {
      return res.status(400).send({ message: "There are not registered news" });
    } 


  res.send({
    nextUrl,
    previousUrl,
    limit,
    offset,
    total,
      
      results: news.map((newsItem) => ({
        id: newsItem._id,
        title: newsItem.title,
        text: newsItem.text,
        banner: newsItem.banner,
        likes: newsItem.likes,
        comment: newsItem.comments,
        username: newsItem.user.name,
        userAvatar: newsItem.user.avatar,
      })),
  });

};

const topNews = async (req, res) => {

  try{
    const news = await newsService.topNewsService();

    if(!news){
      return res.status(400).send({ message: "There is o registered post" });
    }
  
    res.send({
      news: {
        id: news._id,
        title: news.title,
        text: news.text,
        banner: news.banner,
        likes: news.likes,
        comment: news.comments,
        username: news.user.name,
        userAvatar: news.user.avatar,
      }
    });

  }catch (err) {
    res.status(500).send({message: err.message});
  }
};

const findById = async (req, res) => {
  try{

    const {id} = req.params;

    const news = await newsService.findByIdService(id);

    res.send({
      news: {
        id: news._id,
        title: news.title,
        text: news.text,
        banner: news.banner,
        likes: news.likes,
        comment: news.comments,
        username: news.user.name,
        userAvatar: news.user.avatar,
      }
    })

  }catch (err) {
    res.status(500).send({message: err.message});
  }
};

const searchByTitle = async (req, res) =>{
  try{

    const {title} = req.query;

    const news = await newsService.searchByTitleService(title);

    if(news.length === 0){
      return res.status(400).send({ message: "There are no news with this title" });
    }

    return res.send({
      results: news.map((newsItem) => ({
        id: newsItem._id,
        title: newsItem.title,
        text: newsItem.text,
        banner: newsItem.banner,
        likes: newsItem.likes,
        comment: newsItem.comments,
        username: newsItem.user.name,
        userAvatar: newsItem.user.avatar,
      })),
    })

  }catch (err) {
    res.status(500).send({message: err.message});
  }
};

const byUser = async (req, res) =>{
  try{

    const id = req.userId;
    const news = await newsService.byUserService(id);

    return res.send({
      results: news.map((newsItem) => ({
        id: newsItem._id,
        title: newsItem.title,
        text: newsItem.text,
        banner: newsItem.banner,
        likes: newsItem.likes,
        comment: newsItem.comments,
        username: newsItem.user.name,
        userAvatar: newsItem.user.avatar,
      })),
    })

  }catch (err) {
    res.status(500).send({message: err.message});
  }
};

const update = async (req, res) =>{
  try{

    const { title, text, banner } = req.body;
    const {id} = req.params;

    if (!title && !text && !banner) {
      res.status(400).send({ message: "Submit at least one field to update teh post" });
    }
    
    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }
    console.log("chegou 1")

    const news = await newsService.findByIdService(id);
    console.log("chegou 2")
    if (news.user._id != req.userId) {
      return res.status(400).send({ message: "You didn't update this post" });
    }
    console.log("chegou 3")
    await newsService.updateService(id, title, text, banner);

    return res.send({ message: "Post sucessfully update!" });
 
  }catch (err) {
    res.status(500).send({message: err.message});
  }
};

export default{ create, findAll, topNews, findById, searchByTitle, byUser, update };