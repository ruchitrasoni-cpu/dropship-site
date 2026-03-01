import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const productList = document.getElementById("product-list");
const productRef = collection(db, "products");

async function loadProducts() {
  productList.innerHTML = "";
  const snapshot = await getDocs(productRef);

  snapshot.forEach(docSnap => {
    const p = docSnap.data();
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
        <button onclick="orderNow('${p.name}')">Order on WhatsApp</button>
      </div>
    `;
  });
}

window.orderNow = function(name) {
  const phone = "917247465997"; // 🔴 apna number
 const msg = `Hello, I want to order ${name}.
Please confirm price, COD availability & delivery time.`;
loadProducts();
