const sideMenu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");



// ============ show button

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });
  // ======= close button
  closeBtn.addEventListener("click", () => {
    sideMenu.style.visibility = "hidden";
  });