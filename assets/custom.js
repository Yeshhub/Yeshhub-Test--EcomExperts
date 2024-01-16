// Targeting element with class 'product-form__input--dropdown'
var dropdown = document.querySelector('.product-form__input--dropdown');

if (!dropdown) {
} else {
  // Targeting element with class 'swatches'
  var swatches = dropdown.querySelector('.swatches');

  if (!swatches) {
  } else {
    // Targeting element with class 'select__select' within the next sibling of 'swatches'
    var select = swatches.nextElementSibling.querySelector('.select__select');

    if (!select) {
    } else {
      // Get all elements with class 'swatch' within 'swatches'
      var swatchElements = swatches.querySelectorAll('.swatch');

      // Attach click event listener to each 'swatch' element
      swatchElements.forEach(function (swatch) {
        swatch.addEventListener('click', function () {
          // Remove 'selected' class from all 'swatch' elements
          swatchElements.forEach(function (swatch) {
            swatch.classList.remove('selected');
          });

          // Get the selected color value from the 'data-value' attribute
          var selectedColor = this.getAttribute('data-value');
          console.log(selectedColor);

          // Set the selected color as the value of the 'select' element
          select.value = selectedColor;

          // Add 'selected' class to the clicked 'swatch' element
          this.classList.add('selected');
        });
      });
    }
  }
}
// making array for all the product added to cart.
function add_free_product(cartAction) {
    var ids = [];

    var cartItems = document.querySelectorAll('.cart-items .cart-item');

    cartItems.forEach(function(cartItem) {
        var id = cartItem.getAttribute('data-id');
        ids.push(id);
    });

    if (cartAction === 'cartadd') {
        // Check if 'latherBag' is in the array
        if (ids.includes('44974448410874') && !ids.includes('44954670891258')) {
            var data = {
                quantity: 1,
                id: 44954670891258
            };

            fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Successfully added item to cart:', data);
                location.reload();
            })
            .catch(function(error) {
                console.error('Error adding item to cart:', error);
            });
        }else{
          if (ids.includes('44954670891258')) {
              var cartRemoveButton = document.querySelector('.cart-items .cart-item[data-id="44954670891258"] .cart-remove-button');
              if (cartRemoveButton) {
                  cartRemoveButton.click();
              }
          }
        }
    } else if (cartAction === 'cartremove') {
        // Check if '44954670891258' is in the array
        if (ids.includes('44954670891258')) {
            var cartRemoveButton = document.querySelector('.cart-items .cart-item[data-id="44954670891258"] .cart-remove-button');
            if (cartRemoveButton) {
                cartRemoveButton.click();
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('/cart')) {
        // Run the function on the cart page for adding items
        add_free_product('cartadd');

        // Set up an event listener for the click event on the remove button
        document.querySelector('.cart-items .cart-item[data-id="44974448410874"] .cart-remove-button').addEventListener('click', function() {
            setTimeout(function() {
                // Run the function after a delay for removing items
                add_free_product('cartremove');
                console.log('Item removed from cart');
            }, 1500);
        });
    }
});