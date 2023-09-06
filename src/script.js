const cartIcon = document.getElementById("cartIcon");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartButton = document.getElementById("closeCart");

cartIcon.addEventListener("click", () => {
  cartOverlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling while cart is open
});

closeCartButton.addEventListener("click", () => {
  cartOverlay.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling when cart is closed
});



