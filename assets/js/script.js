    // BLESSING, please use this to implement the selected options 
    function submitSelection() {
        const checkboxes = document.querySelectorAll('.retailer-checkbox:checked');
        const selectedRetailers = Array.from(checkboxes).map(checkbox => checkbox.value);
    
        const modalBody = document.getElementById('selectedRetailersBody');
        
        if (selectedRetailers.length === 0) {
          modalBody.innerHTML = '<p>No retailers selected</p>';
          // Show the modal
          const modal = new bootstrap.Modal(document.getElementById('selectedRetailersModal'));
          modal.show();
        }
  }