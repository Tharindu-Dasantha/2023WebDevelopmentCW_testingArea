document.addEventListener("DOMContentLoaded", function () {
  // adding an active class to the currently active page link
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".gallery ul li a");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});


// Fetch the JSON file
fetch("src/anime.json")
  .then((response) => response.json())
  .then((data) => {
    // Access the product elements in the JSON file
    const products = data.products;

    // Create and populate HTML elements for each product in the JSON
    products.forEach((product) => {
      // Create product element
      const productContainer = document.createElement("div");
      productContainer.classList.add("product");

      // Populate the product element with data from the JSON
      const { title, image, price, time, Count } = product;
      productContainer.innerHTML = `
        <div class="imagePart">
          <img src="${image}" alt="${title}" class="image" />
          <div class="imgBottom">
            <div class="imgTagLeft">
              <h2 class="title">${title}</h2>
              <p class="realese_data">${time}</p>
              <p class="epiCount">${Count} Episodes</p>
            </div>
            <div class="imgTagRight">
              <p class="price">$ ${price.toFixed(2)}</p>
              <button class="btn">Add to cart</button>
            </div>
          </div>
        </div>
      `;

      // Append the product element to the page
      document.querySelector(".products").appendChild(productContainer);
    });
  })
  .catch((error) => console.error(error));
