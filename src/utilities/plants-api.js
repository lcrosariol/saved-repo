import sendRequest from './send-request';

const BASE_URL = '/api/plants';

// Retrieve an unpaid plant for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Retrieve an unpaid plant for the logged in user
export function addItemToCart(itemId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

// Update the item's qty in the cart
// Will add the item to the plant if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// Updates the plant's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
