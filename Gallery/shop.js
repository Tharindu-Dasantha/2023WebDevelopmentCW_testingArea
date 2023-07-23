function addToCart(itemName, price) {
  // Get the existing cart items from localStorage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the item is already in the cart
  const existingItemIndex = cartItems.findIndex(
    (item) => item.itemName === itemName
  );

  if (existingItemIndex !== -1) {
    // If the item is already in the cart, increment the quantity
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // If the item is not in the cart, add it as a new item
    cartItems.push({
      itemName: itemName,
      price: price,
      quantity: 1, // Set the initial quantity to 1
    });
  }

  // Store the updated cart back in localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Optionally, you can show a confirmation message to the user or redirect to the cart page
  console.log(`${itemName} added`)
}
