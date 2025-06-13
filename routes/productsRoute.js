const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct } = require('../controllers/productsController');

router.get('/get-products', getAllProducts);
router.get('/get-products/:id', getProduct);

module.exports = router;