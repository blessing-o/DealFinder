function submitSelection() {
    // BLESSING, please use this to implement the selected options 
    const checkboxes = document.querySelectorAll('.retailer-checkbox:checked');
    const selectedRetailers = Array.from(checkboxes).map(checkbox => checkbox.value);
    alert('Selected Retailers: ' + selectedRetailers.join(', '));
  }