// Targeting element with class 'product-form__input--dropdown'
var dropdown = document.querySelector('.product-form__input--dropdown');

// Targeting element with class 'swatches'
var swatches = dropdown.querySelector('.swatches');

// Targeting element with class 'select__select' within the next sibling of 'swatches'
var select = swatches.nextElementSibling.querySelector('.select__select');

// Get all elements with class 'swatch' within 'swatches'
var swatchElements = swatches.querySelectorAll('.swatch');

// Attach click event listener to each 'swatch' element
swatchElements.forEach(function(swatch) {
  swatch.addEventListener('click', function() {
    // Remove 'selected' class from all 'swatch' elements
    swatchElements.forEach(function(swatch) {
      swatch.classList.remove('selected');
    });

    // Get the selected color value from the 'data-value' attribute
    var selectedColor = this.getAttribute('data-value');
    console.log(selectedColor);

    // Set the selected color as the value of the 'select' element
    select.value = selectedColor;

    // Remove the 'selected' attribute from all options within 'select'
    select.querySelectorAll('option').forEach(function(option) {
      option.removeAttribute('selected');
    });

    // Add the 'selected' attribute to the option with the selected color value
    var selectedOption = select.querySelector('option[value="' + selectedColor + '"]');
    if (selectedOption) {
      selectedOption.setAttribute('selected', 'selected');
    }

    // Add 'selected' class to the clicked 'swatch' element
    this.classList.add('selected');
  });
});
