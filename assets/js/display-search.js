// Function to redirect to the retailer's site
function redirectToRetailer(retailerUrl, productId) {
    window.location.href = retailerUrl + '?product_id=' + productId;
}

// Function to fetch product details and update the card
function updateCard(product) {
    //dummy api
    let products = [];
    console.log(product);

    for( i=0;i<product.length ;i++){
        products.push(product[i]);
    }
    console.log(products);
    displayProducts(products);
}

// Function to get URL parameter by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Retrieve the selected item type from the URL
const itemType = getUrlParameter('itemType');

// Fetch from the apis. This is only one. 
let ebayUrl = "https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=Blessing-DealFind-SBX-1f4a4f9a2-bc4924dd&RESPONSE-DATA-FORMAT=JSON&paginationInput.entriesPerPage=6&keywords=Monitors";

let getFilter =function(){
    // let searchParamsArr = document.location.search.split('&');

  // Get the query and format values
//   var query = searchParamsArr[0].split('=').pop();
  let filter = document.location.search.split('=').pop();
  console.log(document.location.search);
  console.log(filter);

  searchApi(filter);
}

let searchApi = function(filter){
    console.log("i am in the search api function "+filter);
    
    let dummy = "https://api.escuelajs.co/api/v1/products/?title="+filter;
fetch(dummy) // REPLACE THIS WITH THE URL
    .then(response => response.json())
    .then(data => updateCard(data))
    .catch(error => console.error('Error fetching product details:', error));
}
// Function to dynamically create and update the card elements
function displayProducts(products) {
    const resultContent = document.getElementById('result-content');

    // Clear existing content
    resultContent.innerHTML = '';

    // Loop through each product and create a card
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4';

        // Card structure
        // <div class="card" onclick="redirectToRetailer('${product.retailerUrl}', '${product.productId}')"></div>
        card.innerHTML = `
                    <div class="card">
                        <img src="${product.images}" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Price: $ ${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                `;

        resultContent.appendChild(card);
    });
}

getFilter();

// Fetch and display products when the page loads
// window.onload = fetchAndDisplayProducts;