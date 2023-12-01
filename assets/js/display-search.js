/** Function to fetch product details and update the card
 * @param product// the data gotten from the api is fetched
 * @param filter// the site to visit
 */
function updateCard(product, filter) {
  //dummy api
  let products = [];
  console.log(product);

  for (i = 0; i < product.length; i++) {
    products.push(product[i]);
  }

  console.log(products);

  if (filter === "GoodDeal") {
    displayProductsFakeStore(products)
    ;
  } else if (filter === "Platzi") {
    displayProductsPlatzi(products);
  }
}

/**
 * This function fetches the api depending on the site selected from the
 * dropdown by the user
 */
let getFilter = function () {
  let filter = document.location.search.split("=").pop();
  // console.log(document.location.search);
  console.log(filter);

  if (filter === "Platzi") {
    fetch("https://api.escuelajs.co/api/v1/products/")
      .then((response) => response.json())
      .then((data) => updateCard(data, filter))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
    return;
  }

  else if (filter === "GoodDeal") {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => updateCard(data, filter))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
      console.log("this ran")
    return;
  }
};

/**
 * Function to dynamically create and update the card elements for GoodDeal
 * */
function displayProductsFakeStore(products) {
  const resultContent = document.getElementById("result-content");

  // Clear existing content
  resultContent.innerHTML = "";

  // Loop through each product and create a card
  products.forEach((product) => {
    console.log("that ran")
    const card = document.createElement("div");
    card.className = "col-md-3";
    

    // Card structure

    card.innerHTML = `
                    <div class="card">

                        <img src="${product.image}" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Price: $ ${product.price.toFixed(
      2
    )}</p>
                        </div>
                    </div>
                `;

    resultContent.appendChild(card);
  });
  return;
}

/**
 * Function to dynamically create and update the card elements for Platzi
 * */
function displayProductsPlatzi(products) {
  const resultContent = document.getElementById("result-content");

  // Clear existing content
  resultContent.innerHTML = "";

  // Loop through each product and create a card
  products.forEach((product) => {
    
    const card = document.createElement("div");
    card.className = "col-md-3";

    // Card structure

    card.innerHTML = `
                    <div class="card">

                        <img src="${product.category.image}" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Price: $ ${product.price.toFixed(
      2
    )}</p>
                        </div>
                    </div>
                `;

    resultContent.appendChild(card);
  });
  return;
}

getFilter();