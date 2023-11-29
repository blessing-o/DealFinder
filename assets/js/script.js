let searchButtonEl = document.querySelector("#search-button");
let dropdownEl = document.querySelector("#dropdown-bar");
let redirectUrl = "./results.html";

    /**
     * This function redirects the current page to the results page with selected item as query parameters
     */
    let redirectPage = function (itemType) {
        let url = `${redirectUrl}?itemType=${encodeURIComponent(itemType)}`;
        document.location.href = url;
    }

    
    
    // BLESSING, please use this to implement the selected options 
    function submitSelection() {

      //TODO: event.preventDefault() is not working and I cannot figure out why --> PHIL: I attempted a fix please advise
      let retailerForm = document.querySelector("#retailerForm");

      retailerForm.addEventListener('submit', function (event) {
          event.preventDefault();
          submitSelection();
      });
        const checkboxes = document.querySelectorAll('.retailer-checkbox:checked');
        const selectedRetailers = Array.from(checkboxes).map(checkbox => checkbox.value);

        console.log(selectedRetailers);
    
        const modalBody = document.getElementById('selectedRetailersBody');
        
        if (selectedRetailers.length === 0) {
          modalBody.innerHTML = '<p>No retailers selected</p>';
          // Show the modal
          const modal = new bootstrap.Modal(document.getElementById('selectedRetailersModal'));
          modal.show();
          return;

        }else{

          //stores an object of the user's search in objectToStore
          let objectToStore = {
            searchValue: dropdownEl.value,
            optionsChecked: selectedRetailers,
          };

          //save to local storage if there is at least one Retailer selected
          //The id is the order the search occurs and the value is the user's
          //search stored in objectToStore
          if (typeof(Storage) !== "undefined") {
            let numberOfItems = localStorage.length;
            localStorage.setItem(numberOfItems,JSON.stringify(objectToStore));

          }
          else{
            //TODO: Try to add a modal that says that Local storage is not supported in this browser
             console.log("Local storage is not supported in this browser.");

        }
        }

         redirectPage(dropdownEl.value);
  }

   //searchButtonEl.addEventListener('click', redirectPage);

