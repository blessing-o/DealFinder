// Function to redirect to the retailer's site
function redirectToRetailer(retailerUrl, productId) {
    window.location.href = retailerUrl + '?product_id=' + productId;
}

// Function to fetch product details and update the card
function updateCard(product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = 'Price: $' + product.price.toFixed(2);
    document.getElementById('product-image').src = product.image;
}

// Function to get URL parameter by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Retrieve the selected item type from the URL
const itemType = getUrlParameter('itemType');

// Fetch from the apis. This is only one. 
fetch('https://api.example.com/products/product-id') // REPLACE THIS WITH THE URL
    .then(response => response.json())
    .then(data => updateCard(data))
    .catch(error => console.error('Error fetching product details:', error));

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
        card.innerHTML = `
                    <div class="card" onclick="redirectToRetailer('${product.retailerUrl}', '${product.productId}')">
                        <img src="${product.imageUrl}" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Price: $${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                `;

        resultContent.appendChild(card);
    });
}

// Fetch and display products when the page loads
window.onload = fetchAndDisplayProducts;