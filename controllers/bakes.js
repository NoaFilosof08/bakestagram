const Bake = require('../models/Bake')

async function bakesIndex(req, res) {
  const bakes = await Bake.find()
  res.status(200).json(bakes)
}

async function bakesCreate(req, res) {
  try {
    const createdBake = await Bake.create(req.body)
    res.status(201).json(createdBake)
  } catch (err) {
    res.json(err)
  }
}

async function bakesShow(req, res) {
  try {
    const bake = await Bake.findById(req.params.id)
    if (!bake) throw new Error()
    res.status(200).json(bake)
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  index: bakesIndex,
  create: bakesCreate,
  show: bakesShow,
}
