const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Category = require('../models/category.model');


router.get('/', auth, async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user.id }).sort({ date: -1 });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post('/', auth, async (req, res) => {
  const { name, color } = req.body;

  try {
    const newCategory = new Category({
      name,
      color,
      user: req.user.id
    });

    const category = await newCategory.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    //check user
    if (category.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await category.deleteOne();
    res.json({ msg: 'Category removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Category not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
