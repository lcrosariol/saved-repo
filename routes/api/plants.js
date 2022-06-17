const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');

// GET /api/plants/cart
router.get('/cart', plantsCtrl.cart);
// POST /api/plants/cart/items/:id
router.post('/cart/items/:id', plantsCtrl.addToCart);
// POST /api/plants/cart/checkout
router.post('/cart/checkout', plantsCtrl.checkout);
// POST /api/plants/cart/qty
router.put('/cart/qty', plantsCtrl.setItemQtyInCart);
// 

module.exports = router;
