import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const productRef = collection(db, "products");

// DOM elements
const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");
const list = document.getElementById("admin-products");

// ADD PRODUCT
async function addProduct() {
  const name = nameInput.value;
  const price = priceInput.value;
  const image =
    imageInput.value || "https://via.placeholder.com/300";

  if (!name || !price) {
    alert("Fill all fields");
    return;
  }

  await addDoc(productRef, { name, price, image });

  nameInput.value = "";
  priceInput.value = "";
  imageInput.value = "";

  loadProducts();
}

// DELETE PRODUCT
async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
  loadProducts();
}

// LOAD PRODUCTS
async function loadProducts() {
  list.innerHTML = "";
  const snapshot = await getDocs(productRef);

  snapshot.forEach(docSnap => {
    const p = docSnap.data();
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <button class="delBtn">Delete</button>
    `;

    div.querySelector(".delBtn").addEventListener("click", () => {
      deleteProduct(docSnap.id);
    });

    list.appendChild(div);
  });
}

// EVENT LISTENER (THIS IS THE FIX)
addBtn.addEventListener("click", addProduct);

// INITIAL LOAD
loadProducts();
