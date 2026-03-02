import { db } from "./firebase.js";

console.log("firebase db object:", db);

const btn = document.getElementById("addBtn");

btn.addEventListener("click", () => {
  alert("Firebase connected, next step DB write");
});
