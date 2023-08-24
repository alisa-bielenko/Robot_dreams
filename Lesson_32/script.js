document.addEventListener("DOMContentLoaded", function () {
  fetch('https://dummyapi.online/api/products')
    .then(response => response.json())
    .then(data => {
      const productsContainer = document.getElementById("products");

      if (data.products && Array.isArray(data.products)) {
        data.products.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("product");

          const titleDiv = document.createElement("div");
          titleDiv.classList.add("title");
          titleDiv.textContent = product.title;

          const priceDiv = document.createElement("div");
          priceDiv.classList.add("price");
          priceDiv.textContent = `${product.price} USD`;

          const descriptionDiv = document.createElement("div");
          descriptionDiv.classList.add("description");
          descriptionDiv.textContent = product.description;

          const image = document.createElement("img");
          const imageUrl = product.images[0]; 
          image.src = imageUrl;
          image.alt = product.title;


          productDiv.appendChild(titleDiv);
          productDiv.appendChild(priceDiv);
          productDiv.appendChild(descriptionDiv);
          productDiv.appendChild(image);

          productsContainer.appendChild(productDiv);
        });
      } else {
        console.error("Incorrect data format");
      }
    })
    .catch(error => console.error("Error while receiving data:", error));
});