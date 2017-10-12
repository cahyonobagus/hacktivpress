var express = require('express');
var router = express.Router();
const articlesController = require('../controllers/articlesController')

router.post('/', articlesController.create)
router.get('/', articlesController.getAll)
router.get('/u/:userid', articlesController.getByUId)
router.get('/c/:catid', articlesController.getByCId)
router.get('/:id', articlesController.getById)
router.put('/:id', articlesController.update)
router.delete('/:id', articlesController.destroy)

module.exports = router;
