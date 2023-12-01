let searchButtonEl = document.querySelector("#submit");
let dropdownEl = document.querySelector("#dropdown-bar");
let redirectUrl = "./results.html";

/**
 * This function redirects the current page to the results page with selected item as query parameters
 */
let redirectPage = function (itemType) {
  let url = `${redirectUrl}?itemType=${encodeURIComponent(itemType)}`;
  document.location.href = url;
};

/** Function to save to Local Storage using the order
 * it is saved as the key and the value of the dropdown
 * as the value
 */
function storeLocalStorage() {
  let numberOfItems = localStorage.length;
  localStorage.setItem(numberOfItems, dropdownEl.value);
}

/**
     *Functional to display model if nothing is selected from
     the dropdown. When Items are slected it saves to local storage
     and redirects it to the results.html
     */
function submitSelection() {
  const selectedValue = dropdownEl.value;

  if (!selectedValue) {
    const modalBody = document.getElementById("selectedRetailersBody");
    modalBody.innerHTML = "<p>Please select a product type</p>";
    const modal = new bootstrap.Modal(
      document.getElementById("selectedRetailersModal")
    );
    modal.show();
    return;
  }

  storeLocalStorage();

  let filterVal = dropdownEl.value;
  let queryString = "./results.html?format=" + filterVal;
  location.assign(queryString);

  redirectPage(dropdownEl.value);
}

//Event Listener to run the submitSelection function
searchButtonEl.addEventListener("click", submitSelection);