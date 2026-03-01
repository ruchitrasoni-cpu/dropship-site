let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
  renderAdmin();
}

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value || "https://via.placeholder.com/300";

  if (!name || !price) return alert("Fill all fields");

  products.push({ name, price, image });
  saveProducts();

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
}

function renderAdmin() {
  const list = document.getElementById("admin-products");
  list.innerHTML = "";

  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
        <button onclick="deleteProduct(${i})" style="background:red">
          Delete
        </button>
      </div>
    `;
  });
}

renderAdmin();
