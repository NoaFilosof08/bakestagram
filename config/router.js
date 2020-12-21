const router = require('express').Router()
const bakes = require('../controllers/bakes')

router.route('/bakes')
  .get(bakes.index)
  .post(bakes.create)

router.route('/bakes/:id')
  .get(bakes.show)


module.exports = router
