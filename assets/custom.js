// Targeting element with id 'Size'
document.getElementById('Size').addEventListener('change', function () {
  // Get selected value
    var selectedValue = this.value;
    // console.log(selectedValue);

    var swatchInput = document.querySelector('.product-form__input.Size input[value="' + selectedValue + '"]');
    var swatchId = swatchInput ? swatchInput.id : null;
// Get label
    if (swatchId) {
        var swatchLabel = document.querySelector('.product-form__input.Size label[for="' + swatchId + '"]');
        if (swatchLabel) {
          // Trigger Click on label
            swatchLabel.click();
        }
    }
});

// making array for all the product added to cart.
function add_free_product(cart) {
    var ids = [];

    var cartItems = document.querySelectorAll('.cart-items .cart-item');

    cartItems.forEach(function(cartItem) {
        var id = cartItem.getAttribute('data-id');
        ids.push(id);
    });
    if (cart == 'cartadd'){
      // Check if 'latherBag' is in the array
        if (ids.includes('44974448410874')) {
            if (!ids.includes('44954670891258')) {
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
                    console.log('success', data);
                    location.reload();
                })
                .catch(function(error) {
                    console.error('Error:', error);
                });
              console.log('in4');
            }
        } else {
            // Check if '44954670891258' is in the array
            if (ids.includes('44954670891258')) {
                var cartRemoveButton = document.querySelector('.cart-items .cart-item[data-id="44954670891258"] cart-remove-button');
                if (cartRemoveButton) {
                    cartRemoveButton.click();
                }
              console.log('in3');
            }
        }
    }
    if (cart == 'cartremove'){
      console.log('in1');
        if (ids.includes('44954670891258')) {
          console.log('in2');
            var cartRemoveButton = document.querySelector('.cart-items .cart-item[data-id="44954670891258"] cart-remove-button');
            if (cartRemoveButton) {
                cartRemoveButton.click();
            }
        }
    }
    
}
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.indexOf('/cart') > -1) {
        // Run the function on the cart page
        add_free_product('cartadd');
    }
    document.querySelector('.cart-items .cart-item[data-id="44974448410874"] cart-remove-button').addEventListener('click', function() {
        setTimeout(function(){
            console.log('in');
            add_free_product('cartremove');
            console.log('click');
        }, 1500);
    });
});