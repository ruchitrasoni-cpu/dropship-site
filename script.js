const productList = document.getElementById("product-list");
const products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach(p => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <button onclick="orderNow('${p.name}')">Order on WhatsApp</button>
    </div>
  `;
});

function orderNow(name) {
  const phone = "917247465997"; // apna number yahan (no +, no space)
  const msg = `Hello, I want to order ${name}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
