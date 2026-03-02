console.log("admin js loaded");

const btn = document.getElementById("addBtn");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");

btn.addEventListener("click", () => {
  alert(
    "Name: " + nameInput.value + 
    " | Price: " + priceInput.value
  );
});
