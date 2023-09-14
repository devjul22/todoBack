const router = require('express').Router();
const { Car } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const car = await Car.findAll({
      raw: true,
    });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Server side error occurred' });
  }
});

module.exports = router;
