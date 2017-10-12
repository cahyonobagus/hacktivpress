const Article = require('../models/Article')

module.exports = {
  create: (req, res) => {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    })
    .then(article => {res.send(article)})
    .catch(err => {res.send(err)})
  },
  getAll: (req, res) => {
    Article.find({})
    .populate({ path: 'author', select: '_id username'})
    .then(articles => {res.send(articles)})
    .catch(err => {re.send(err)})
  },
  getByUId: (req, res) => {
    Article.find({author: req.params.userid})
    .populate({ path: 'author', select: '_id username'})
    .then(articles => {res.send(articles)})
    .catch(err => {res.send(err)})
  },
  getByCId: (req, res) => {
    Article.find({category: req.params.catid})
    .populate({ path: 'author', select: '_id username'})
    .then(articles => {res.send(articles)})
    .catch(err => {res.send(err)})
  },
  getById: (req, res) => {
    Article.find({_id: req.params.id})
    .populate({ path: 'author', select: '_id username'})
    .then(article => {res.send(article)})
    .catch(err => {res.send(err)})
  },
  update: (req, res) => {
    Article.findOneAndUpdate({_id: req.params.id},{
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    })
    .then(result => {res.send(result)})
    .catch(err => {res.send(err)})
  },
  destroy: (req, res) => {
    Article.remove({_id: req.params.id})
    .then(result => {res.send(result)})
    .catch(err => {res.send(err)})
  }
}
