    // Function to add items to the cart
   function addToCart(itemName, price) {
    const cartItems = document.getElementById('cart'); // Change 'Addtocart' to the actual ID or class of your cart element
  
    // Create a new list item for the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - ${price}`;
  
    // Append the new item to the cart
    cartItems.appendChild(listItem);
  }
  
  // Function to handle clicking the "Add to Cart" button
  function handleAddToCart(itemName, price) {
    addToCart(itemName, price);
    alert(`Added ${itemName} to the cart!`);
  }
  
  // Attach click event listeners to all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('[data-action="addToCart"]')[0]; // Use a data attribute to target the buttons
  console.log(addToCartButtons);
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemName = this.parentNode.querySelector('p:first-child').textContent;
      const price = this.parentNode.querySelector('p:nth-child(2)').textContent;
      handleAddToCart(itemName, price);
    });
  });
  