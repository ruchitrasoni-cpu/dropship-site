import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const productRef = collection(db, "products");

async function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image =
    document.getElementById("image").value ||
    "https://via.placeholder.com/300";

  if (!name || !price) {
    alert("Fill all fields");
    return;
  }

  await addDoc(productRef, { name, price, image });

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";

  loadProducts();
}

async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
  loadProducts();
}

async function loadProducts() {
  const list = document.getElementById("admin-products");
  list.innerHTML = "";

  const snapshot = await getDocs(productRef);
  snapshot.forEach(docSnap => {
    const p = docSnap.data();
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
        <button onclick="deleteProduct('${docSnap.id}')" style="background:red">
          Delete
        </button>
      </div>
    `;
  });
}

window.addProduct = addProduct;
window.deleteProduct = deleteProduct;

loadProducts();
