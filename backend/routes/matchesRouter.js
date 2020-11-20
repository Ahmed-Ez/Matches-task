const router = require('express').Router();
const Match = require('../models/Match');

router.get('/', async (req, res) => {
  try {
    let matches = await Match.find({}).sort('startTime');
    res.status(200).json({ matches });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const match = new Match(req.body);
    await match.save();
    res.status(201).json({ match });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    let match = await Match.findOne({ _id: req.params.id });
    if (!match) return res.status(404).json({ msg: 'Match not found' });
    return res.status(200).json({ match });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    let match = await Match.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!match) return res.status(404).json({ msg: 'Match not found' });
    res.status(202).json({ match });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let match = await Match.findOne({ _id: req.params.id });
    if (!match) return res.status(404).json({ msg: 'Match not found' });
    await match.deleteOne();
    res.status(202).json({ msg: 'Match deleted' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
