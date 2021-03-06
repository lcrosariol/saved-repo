const Plant = require('../../models/plant');
const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};

// A cart is the unpaid plant for a user
async function cart(req, res) {
  const cart = await Plant.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Plant.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
  
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  let cart = await Plant.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  console.log('cart is', cart)
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Plant.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}