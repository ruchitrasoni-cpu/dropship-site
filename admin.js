import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

console.log("admin js + firebase loaded");

const btn = document.getElementById("addBtn");

btn.addEventListener("click", async () => {
  try {
    await addDoc(collection(db, "products"), {
      name: "Test Product",
      price: "999",
      image: "https://via.placeholder.com/300"
    });
    alert("PRODUCT ADDED TO FIREBASE");
  } catch (e) {
    console.error("Firebase error:", e);
    alert("ERROR: " + e.message);
  }
});
