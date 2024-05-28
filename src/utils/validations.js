/**
 * Extracts the first name from a full name string.
 *
 * @param {string} fullName - The full user name separated by blank spaces.
 * @returns {string} - The first name extracted from the full name, or the name itself if no blank space is found.
 */
function firstName(fullName) {
  if (!fullName || fullName.trim() === '') {
    return ""; // Retorna uma string vazia se fullName for uma string vazia ou apenas espaços em branco
  }

  fullName = fullName.trim(); // Remove espaços em branco extras no início e no final da string

  const blankSpace = fullName.indexOf(' ');

  if (blankSpace === -1) {
    return fullName; // Retorna o fullName original se não houver espaços em branco
  } else {
    return fullName.slice(0, blankSpace); // Retorna o primeiro nome se houver espaços em branco
  }
}

/**
 * Verifies the availability of a product in stock based on its type and desired quantity.
 *
 * @param {string} productType - The type of the product to check for availability.
 * @param {number} qty - The desired quantity of the product to check.
 * @returns {boolean} - Returns true if the desired quantity of the specified product type is available in stock,
 *                      otherwise returns false.
 */
function verifyStockAvailability(productType, qty) {
  const stock = {
    laptop: 10,
    smartphone: 20,
    headphone: 5,
    tablet: 15,
    book: 0,
  };
  //valida as entradads
  if(typeof productType !== "string") return false;
  const productNames = Object.keys(stock);
  const isPresent = productNames.indexOf(productType);
  if(isPresent === -1) return false;
  if(qty <= 0) return false;
  //checa disponibilidade do produto
  const availableStock = stock[productType];
  if (availableStock === 0) return false;
  else return true;
}

/**
 * Calculates the total price of an array of products in an e-commerce application.
 *
 * @param {Array} products - An array of product objects, each containing 'price' and 'quantity' properties.
 * @returns {number} - The total price obtained by multiplying the price of each product by its quantity
 *                    and summing up the individual product prices.
 *
 * Example of products array:
 *   [
 *     { name: 'Product 1', price: 10, quantity: 2 },
 *     { name: 'Product 2', price: 15, quantity: 2 },
 *     { name: 'Product 3', price: 20, quantity: 1 }
 *   ]
 */
function calculateTotalPrice(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    if(typeof products[i].name !== 'string') return "ERROR - O nome de um produto não pode ser uma string";
    if(products[i].price < 0) return "ERROR - Há produto com preço negativo";
    if(products[i].quantity < 0) return "ERROR - Há produto com quantidade negativa";
    
    total += (products[i].price * products[i].quantity);
  }
  return total;
}

module.exports = { firstName, verifyStockAvailability, calculateTotalPrice };
