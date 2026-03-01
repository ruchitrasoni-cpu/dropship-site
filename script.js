const productList = document.getElementById("product-list");
const products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach(p => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <button class="wa-btn">Order on WhatsApp</button>
    </div>
  `;
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("wa-btn")) {
    const name = e.target.parentElement.querySelector("h3").innerText;
    const phone = "917247465997"; // 🔴 APNA NUMBER YAHAN
    const msg = "Hello, I want to order " + name;
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
    window.location.href = url;
  }
});
